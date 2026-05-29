import { useState, useEffect } from 'react';
import { db } from '../firebase.config';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

export default function GestionProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoria: '',
    marca: ''
  });

  // Cargar productos al montar el componente
  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      setLoading(true);
      const productosCollection = collection(db, 'Productos nacionales');
      const snapshot = await getDocs(productosCollection);
      
      const productosData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setProductos(productosData);
    } catch (error) {
      console.error('Error al cargar productos:', error);
      setMensaje('Error al cargar los productos');
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

  // CREATE: Agregar nuevo producto
  const handleCrear = async (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.nombre || !formData.precio || !formData.stock) {
      setMensaje('Por favor completa todos los campos obligatorios');
      return;
    }

    try {
      const productoCompleto = {
        nombre: formData.nombre,
        descripcion: formData.descripcion,
        precio: parseFloat(formData.precio),
        stock: parseInt(formData.stock),
        categoria: formData.categoria,
        marca: formData.marca,
        createdAt: new Date()
      };

      // Paso 1: Referencia a la colección
      const productosCollection = collection(db, 'Productos nacionales');

      // Paso 2: Usar addDoc para crear
      await addDoc(productosCollection, productoCompleto);

      setMensaje('✅ Producto creado exitosamente');
      setFormData({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: '',
        categoria: '',
        marca: ''
      });

      // Recargar productos
      await cargarProductos();
    } catch (error) {
      console.error('Error al crear producto:', error);
      setMensaje('❌ Error al crear el producto');
    }
  };

  // DELETE: Eliminar producto
  const handleEliminar = async (id) => {
    const confirmacion = window.confirm('¿Está seguro de eliminar este producto?');

    if (confirmacion) {
      try {
        // Paso 1: Crear referencia al documento
        const docRef = doc(db, 'Productos nacionales', id);

        // Paso 2: Ejecutar deleteDoc
        await deleteDoc(docRef);

        // Paso 3: Actualizar estado local
        setProductos(productos.filter(prod => prod.id !== id));
        setMensaje('✅ Producto eliminado exitosamente');
      } catch (error) {
        console.error('Error al eliminar producto:', error);
        setMensaje('❌ Error al eliminar el producto');
      }
    }
  };

  return (
    <div className="container">
      <h1>⚙️ Gestión de Productos</h1>

      {mensaje && (
        <div className={`alert ${mensaje.includes('✅') ? 'alert-success' : 'alert-error'}`}>
          {mensaje}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
        
        {/* Formulario de Creación */}
        <div className="card">
          <h2>📝 Crear Nuevo Producto</h2>
          <form onSubmit={handleCrear}>
            <div className="form-group">
              <label>Nombre *</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Ej: Café Premium"
              />
            </div>

            <div className="form-group">
              <label>Descripción</label>
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
                placeholder="Describe el producto"
                rows="3"
              ></textarea>
            </div>

            <div className="form-group">
              <label>Precio ($) *</label>
              <input
                type="number"
                name="precio"
                value={formData.precio}
                onChange={handleInputChange}
                placeholder="10.50"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label>Stock *</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                placeholder="100"
              />
            </div>

            <div className="form-group">
              <label>Categoría</label>
              <input
                type="text"
                name="categoria"
                value={formData.categoria}
                onChange={handleInputChange}
                placeholder="Ej: Bebidas"
              />
            </div>

            <div className="form-group">
              <label>Marca</label>
              <input
                type="text"
                name="marca"
                value={formData.marca}
                onChange={handleInputChange}
                placeholder="Ej: Nespresso"
              />
            </div>

            <button type="submit" className="btn btn-success" style={{ width: '100%' }}>
              ✅ Crear Producto
            </button>
          </form>
        </div>

        {/* Lista de Productos */}
        <div>
          <div className="card">
            <h2>📦 Productos Creados ({productos.length})</h2>
            
            {loading ? (
              <div className="loading">Cargando...</div>
            ) : productos.length === 0 ? (
              <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>
                No hay productos aún. ¡Crea uno en el formulario!
              </p>
            ) : (
              <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
                {productos.map(producto => (
                  <div
                    key={producto.id}
                    style={{
                      padding: '15px',
                      marginBottom: '10px',
                      backgroundColor: '#f9f9f9',
                      borderRadius: '5px',
                      borderLeft: '4px solid #007bff'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <div>
                        <h4>{producto.nombre}</h4>
                        <p style={{ fontSize: '13px', color: '#666', margin: '5px 0' }}>
                          💰 ${producto.precio?.toFixed(2) || '0.00'}
                        </p>
                        <p style={{ fontSize: '13px', color: '#666', margin: '5px 0' }}>
                          📦 Stock: {producto.stock}
                        </p>
                      </div>
                      <button
                        onClick={() => handleEliminar(producto.id)}
                        className="btn btn-danger"
                        style={{ padding: '5px 10px', fontSize: '12px' }}
                      >
                        🗑️ Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Documentación */}
      <div className="card" style={{ backgroundColor: '#f0f9ff', marginTop: '30px' }}>
        <h3>📚 Explicación del Código</h3>
        <div style={{ marginTop: '15px', lineHeight: '1.8' }}>
          <h4>CREATE - Usar addDoc():</h4>
          <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '5px', overflow: 'x' }}>
{`const productosCollection = collection(db, "Productos nacionales");
await addDoc(productosCollection, productoCompleto);`}
          </pre>

          <h4 style={{ marginTop: '20px' }}>DELETE - Usar deleteDoc():</h4>
          <pre style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>
{`const docRef = doc(db, "Productos nacionales", id);
await deleteDoc(docRef);
setProductos(productos.filter(prod => prod.id !== id));`}
          </pre>
        </div>
      </div>
    </div>
  );
}
