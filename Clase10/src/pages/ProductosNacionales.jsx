import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase.config';
import { collection, getDocs } from 'firebase/firestore';

export default function ProductosNacionales() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosCollection = collection(db, 'Productos nacionales');
        const snapshot = await getDocs(productosCollection);
        
        const productosData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setProductos(productosData);
      } catch (err) {
        console.error('Error al cargar productos:', err);
        setError('Error al cargar los productos. Verifica tu configuración de Firebase.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return <div className="container"><div className="loading">⏳ Cargando productos...</div></div>;
  }

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>🏪 Productos Nacionales</h1>
      
      {productos.length === 0 ? (
        <div className="alert alert-error">
          No hay productos disponibles. Asegúrate de haber configurado Firebase correctamente.
        </div>
      ) : (
        <div className="product-grid">
          {productos.map(producto => (
            <div key={producto.id} className="product-card">
              <div className="product-card-body">
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p>
                  <strong>Stock:</strong> {producto.stock || 'N/A'}
                </p>
                <div className="product-price">
                  ${producto.precio?.toFixed(2) || '0.00'}
                </div>
                <Link 
                  to={`/productos-nacionales/${producto.id}`}
                  className="btn btn-primary"
                  style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
                >
                  Ver Detalle →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
