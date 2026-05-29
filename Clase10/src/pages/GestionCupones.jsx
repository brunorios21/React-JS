import { useState, useEffect } from 'react';
import { db } from '../firebase.config';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

export default function GestionCupones() {
  const [cupones, setCupones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [formData, setFormData] = useState({
    codigo: '',
    descuento: ''
  });

  // Cargar cupones al montar el componente
  useEffect(() => {
    cargarCupones();
  }, []);

  const cargarCupones = async () => {
    try {
      setLoading(true);
      const cuponesCollection = collection(db, 'cupones');
      const snapshot = await getDocs(cuponesCollection);

      const cuponesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setCupones(cuponesData);
    } catch (error) {
      console.error('Error al cargar cupones:', error);
      setMensaje('Error al cargar los cupones');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // CREATE: Crear nuevo cupón
  const handleCrear = async (e) => {
    e.preventDefault();

    // Validación
    if (!formData.codigo || !formData.descuento) {
      setMensaje('Por favor completa todos los campos');
      return;
    }

    if (isNaN(formData.descuento) || parseFloat(formData.descuento) <= 0 || parseFloat(formData.descuento) > 100) {
      setMensaje('El descuento debe ser un número entre 1 y 100');
      return;
    }

    try {
      const cuponCompleto = {
        codigo: formData.codigo.toUpperCase(),
        descuento: parseFloat(formData.descuento),
        createdAt: new Date()
      };

      // Referencia a la colección "cupones"
      const cuponesCollection = collection(db, 'cupones');

      // Usar addDoc para crear el documento
      await addDoc(cuponesCollection, cuponCompleto);

      setMensaje('✅ Cupón creado exitosamente');
      setFormData({
        codigo: '',
        descuento: ''
      });

      // Recargar cupones
      await cargarCupones();
    } catch (error) {
      console.error('Error al crear cupón:', error);
      setMensaje('❌ Error al crear el cupón');
    }
  };

  // DELETE: Eliminar cupón
  const handleEliminar = async (id) => {
    const confirmacion = window.confirm('¿Está seguro de eliminar este cupón?');

    if (confirmacion) {
      try {
        // Crear referencia al documento
        const docRef = doc(db, 'cupones', id);

        // Ejecutar deleteDoc
        await deleteDoc(docRef);

        // Actualizar estado local
        setCupones(cupones.filter(cupon => cupon.id !== id));
        setMensaje('✅ Cupón eliminado exitosamente');
      } catch (error) {
        console.error('Error al eliminar cupón:', error);
        setMensaje('❌ Error al eliminar el cupón');
      }
    }
  };

  return (
    <div className="container">
      <h1>🎟️ Gestión de Cupones de Descuento</h1>

      {mensaje && (
        <div className={`alert ${mensaje.includes('✅') ? 'alert-success' : 'alert-error'}`}>
          {mensaje}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>

        {/* Formulario de Creación */}
        <div className="card">
          <h2>📝 Crear Nuevo Cupón</h2>
          <form onSubmit={handleCrear}>
            <div className="form-group">
              <label>Código del Cupón *</label>
              <input
                type="text"
                name="codigo"
                value={formData.codigo}
                onChange={handleInputChange}
                placeholder="Ej: DESCUENTO20"
                maxLength="20"
              />
              <small style={{ color: '#999', display: 'block', marginTop: '5px' }}>
                Se convertirá a mayúsculas automáticamente
              </small>
            </div>

            <div className="form-group">
              <label>Porcentaje de Descuento (%) *</label>
              <input
                type="number"
                name="descuento"
                value={formData.descuento}
                onChange={handleInputChange}
                placeholder="Ej: 20"
                min="1"
                max="100"
              />
              <small style={{ color: '#999', display: 'block', marginTop: '5px' }}>
                Ingresa un valor entre 1 y 100
              </small>
            </div>

            <button type="submit" className="btn btn-success" style={{ width: '100%' }}>
              ✅ Crear Cupón
            </button>
          </form>

          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f9ff', borderRadius: '5px' }}>
            <h4>📋 Requerimientos:</h4>
            <ul style={{ fontSize: '13px', marginLeft: '20px', lineHeight: '1.6' }}>
              <li>Código obligatorio</li>
              <li>Descuento entre 1 y 100%</li>
              <li>Se guardan en colección "cupones"</li>
              <li>Usa addDoc para crear</li>
            </ul>
          </div>
        </div>

        {/* Lista de Cupones */}
        <div>
          <div className="card">
            <h2>🎟️ Cupones Disponibles ({cupones.length})</h2>

            {loading ? (
              <div className="loading">Cargando cupones...</div>
            ) : cupones.length === 0 ? (
              <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>
                No hay cupones aún. ¡Crea uno en el formulario!
              </p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Descuento</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {cupones.map(cupon => (
                    <tr key={cupon.id}>
                      <td>
                        <strong style={{ fontSize: '14px', color: '#007bff' }}>
                          {cupon.codigo}
                        </strong>
                      </td>
                      <td>
                        <span style={{
                          padding: '5px 10px',
                          backgroundColor: '#d4edda',
                          color: '#155724',
                          borderRadius: '3px',
                          fontWeight: 'bold'
                        }}>
                          {cupon.descuento}% OFF
                        </span>
                      </td>
                      <td>
                        <button
                          onClick={() => handleEliminar(cupon.id)}
                          className="btn btn-danger"
                          style={{ padding: '5px 10px', fontSize: '12px' }}
                        >
                          🗑️ Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Documentación y Ejercicio */}
      <div className="card" style={{ backgroundColor: '#f9f9f9', marginTop: '30px' }}>
        <h3>📚 Explicación Técnica del Ejercicio</h3>

        <div style={{ marginTop: '20px' }}>
          <h4>✅ CREATE - Función addDoc():</h4>
          <p style={{ color: '#666', marginBottom: '10px' }}>
            Crea un nuevo documento en Firestore con datos automáticamente generados.
          </p>
          <pre style={{ backgroundColor: '#fff', padding: '12px', borderRadius: '5px', overflow: 'auto', fontSize: '12px' }}>
{`const cuponesCollection = collection(db, 'cupones');
const cuponCompleto = {
  codigo: formData.codigo.toUpperCase(),
  descuento: parseFloat(formData.descuento),
  createdAt: new Date()
};
await addDoc(cuponesCollection, cuponCompleto);`}
          </pre>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h4>🗑️ DELETE - Funciones doc() y deleteDoc():</h4>
          <p style={{ color: '#666', marginBottom: '10px' }}>
            Elimina un documento específico usando su ID.
          </p>
          <pre style={{ backgroundColor: '#fff', padding: '12px', borderRadius: '5px', overflow: 'auto', fontSize: '12px' }}>
{`const docRef = doc(db, 'cupones', id);
await deleteDoc(docRef);
setCupones(cupones.filter(cupon => cupon.id !== id));`}
          </pre>
        </div>

        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
          <h4>💡 Buenas Prácticas:</h4>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li>Siempre pedir confirmación antes de eliminar (window.confirm)</li>
            <li>Validar datos en formularios antes de enviar a Firebase</li>
            <li>Actualizar el estado local inmediatamente (mejor UX)</li>
            <li>Usar try-catch para manejar errores</li>
            <li>Mostrar mensajes al usuario sobre el resultado de acciones</li>
          </ul>
        </div>

        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e7f3ff', borderRadius: '5px' }}>
          <h4>🎯 Objetivos del Ejercicio:</h4>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li>✅ Aplicar CREATE con addDoc()</li>
            <li>✅ Aplicar DELETE con deleteDoc()</li>
            <li>✅ Manejar validación de formularios</li>
            <li>✅ Actualizar UI en tiempo real</li>
            <li>✅ Gestionar errores correctamente</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
