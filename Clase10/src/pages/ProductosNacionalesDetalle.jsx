import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase.config';
import { doc, getDoc } from 'firebase/firestore';

export default function ProductosNacionalesDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        // Paso 1: Crear referencia al documento
        const docRef = doc(db, 'Productos nacionales', id);
        
        // Paso 2: Obtener datos del documento
        const resp = await getDoc(docRef);
        
        // Paso 3: Verificar si existe
        if (resp.exists()) {
          setProducto({
            id: resp.id,
            ...resp.data()
          });
        } else {
          setError('Producto no encontrado');
        }
      } catch (err) {
        console.error('Error al cargar producto:', err);
        setError('Error al cargar el producto.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  if (loading) {
    return <div className="container"><div className="loading">⏳ Cargando producto...</div></div>;
  }

  if (error) {
    return (
      <div className="container">
        <Link to="/productos-nacionales" className="btn btn-primary" style={{ marginBottom: '20px' }}>
          ← Volver a Productos
        </Link>
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  if (!producto) {
    return <div className="container"><div className="loading">No hay datos disponibles</div></div>;
  }

  return (
    <div className="container">
      <Link to="/productos-nacionales" className="btn btn-primary" style={{ marginBottom: '20px' }}>
        ← Volver a Productos
      </Link>

      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
          <div>
            <h1>{producto.nombre}</h1>
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>
                {producto.descripcion}
              </p>

              <div style={{ 
                fontSize: '32px', 
                fontWeight: 'bold', 
                color: '#28a745', 
                marginBottom: '20px' 
              }}>
                ${producto.precio?.toFixed(2) || '0.00'}
              </div>

              <div style={{ marginBottom: '15px' }}>
                <strong>Stock Disponible:</strong>
                <span style={{ 
                  marginLeft: '10px', 
                  padding: '5px 10px', 
                  backgroundColor: producto.stock > 0 ? '#d4edda' : '#f8d7da',
                  borderRadius: '5px',
                  color: producto.stock > 0 ? '#155724' : '#721c24'
                }}>
                  {producto.stock} unidades
                </span>
              </div>

              {producto.categoria && (
                <div style={{ marginBottom: '15px' }}>
                  <strong>Categoría:</strong> {producto.categoria}
                </div>
              )}

              {producto.marca && (
                <div style={{ marginBottom: '15px' }}>
                  <strong>Marca:</strong> {producto.marca}
                </div>
              )}

              <button 
                className="btn btn-success" 
                style={{ marginTop: '30px', fontSize: '16px', padding: '15px 30px' }}
                onClick={() => alert('Funcionalidad de carrito próximamente')}
              >
                🛒 Agregar al Carrito
              </button>
            </div>
          </div>

          <div style={{
            backgroundColor: '#f0f0f0',
            padding: '30px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <p style={{ color: '#999', marginBottom: '20px' }}>📸 Imagen del producto</p>
            <div style={{
              width: '100%',
              height: '300px',
              backgroundColor: '#e0e0e0',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px'
            }}>
              📦
            </div>
          </div>
        </div>

        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
          <h3>📋 Información Técnica</h3>
          <p style={{ marginTop: '15px', color: '#666' }}>
            <strong>ID del Producto:</strong> {producto.id}
          </p>
          <p style={{ marginTop: '10px', color: '#999', fontSize: '12px' }}>
            Este es un componente de detalle que utiliza <code>useParams()</code> para capturar el ID de la URL
            y <code>getDoc()</code> para obtener los datos específicos del producto desde Firebase.
          </p>
        </div>
      </div>
    </div>
  );
}
