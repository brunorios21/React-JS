import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, updateDoc, doc, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import FormularioProducto from './FormularioProducto';

const Gestion = () => {
  const [productos, setProductos] = useState([]);
  const [productoAEditar, setProductoAEditar] = useState(null);

  const cargarProductos = async () => {
    try {
      const consulta = await getDocs(collection(db, 'Productos nacionales'));
      const lista = consulta.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
      setProductos(lista);
    } catch (error) {
      console.error('Error cargando productos:', error);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleEditClick = (producto) => {
    setProductoAEditar(producto);
  };

  const cancelarEdicion = () => {
    setProductoAEditar(null);
  };

  const handleEliminar = async (id) => {
    const confirmacion = window.confirm('¿Eliminar este producto?');
    if (!confirmacion) {
      return;
    }
    try {
      await deleteDoc(doc(db, 'Productos nacionales', id));
      cargarProductos();
    } catch (error) {
      console.error('Error eliminando producto:', error);
    }
  };

  const manejarEnvio = async (productoFinal) => {
    try {
      if (productoAEditar) {
        const referencia = doc(db, 'Productos nacionales', productoAEditar.id);
        await updateDoc(referencia, productoFinal);
        alert('Producto actualizado con éxito.');
      } else {
        await addDoc(collection(db, 'Productos nacionales'), productoFinal);
        alert('Producto guardado con éxito.');
      }
      setProductoAEditar(null);
      cargarProductos();
    } catch (error) {
      console.error('Error en el envío del producto:', error);
    }
  };

  return (
    <div>
      <FormularioProducto
        productoAEditar={productoAEditar}
        onSubmit={manejarEnvio}
        cancelarEdicion={cancelarEdicion}
      />
      <div>
        <h2>Lista de productos</h2>
        {productos.length === 0 && <p>No hay productos cargados.</p>}
        {productos.map((producto) => (
          <div key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>Precio: {producto.precio}</p>
            <p>{producto.descripcion}</p>
            <button type="button" onClick={() => handleEditClick(producto)}>
              Editar
            </button>
            <button type="button" onClick={() => handleEliminar(producto.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gestion;
