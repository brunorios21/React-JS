## Clase 11 - Actualización y validación

## Introducción

En esta clase se completa el ciclo CRUD con la funcionalidad de actualizar productos en Firebase y se añade validación básica de formularios en React.

## Objetivos

- Implementar la edición de productos existentes.
- Reutilizar el formulario de creación para modo edición.
- Validar los datos del formulario antes de enviarlos a Firebase.

## Flujo de la función de actualización

1. El componente de gestión guarda el producto seleccionado en un estado `productoAEditar`.
2. Cuando el usuario hace clic en "Editar", se asigna el producto a `productoAEditar`.
3. Un `useEffect` observa `productoAEditar` y carga los datos en el formulario.
4. El formulario cambia su título y texto de botón según el modo.
5. Al enviar, se decide si se crea un producto nuevo o se actualiza uno existente.

Ejemplo de lógica en `Gestion.jsx`

```jsx
import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, updateDoc, doc, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import FormularioProducto from './FormularioProducto';

const Gestion = () => {
  const [productos, setProductos] = useState([]);
  const [productoAEditar, setProductoAEditar] = useState(null);

  const cargarProductos = async () => {
    const querySnapshot = await getDocs(collection(db, 'Productos nacionales'));
    const lista = querySnapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
    setProductos(lista);
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

  const manejarEnvio = async (productoFinal) => {
    try {
      if (productoAEditar) {
        const docRef = doc(db, 'Productos nacionales', productoAEditar.id);
        await updateDoc(docRef, productoFinal);
        alert('Producto actualizado con éxito.');
      } else {
        await addDoc(collection(db, 'Productos nacionales'), productoFinal);
        alert('Producto guardado con éxito.');
      }
      setProductoAEditar(null);
      cargarProductos();
    } catch (error) {
      console.error('Error:', error);
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
        {productos.map(producto => (
          <div key={producto.id}>
            <h4>{producto.nombre}</h4>
            <button onClick={() => handleEditClick(producto)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gestion;
```

Ejemplo de `FormularioProducto.jsx`

```jsx
import { useEffect, useState } from 'react';

const estadoInicialForm = {
  nombre: '',
  precio: '',
  descripcion: '',
  imagen: ''
};

const FormularioProducto = ({ productoAEditar, onSubmit, cancelarEdicion }) => {
  const [datosForm, setDatosForm] = useState(estadoInicialForm);

  useEffect(() => {
    if (productoAEditar) {
      setDatosForm(productoAEditar);
    } else {
      setDatosForm(estadoInicialForm);
    }
  }, [productoAEditar]);

  const validarFormulario = () => {
    if (!datosForm.nombre.trim()) {
      alert('El nombre no puede quedar vacío.');
      return false;
    }
    const precio = Number(datosForm.precio);
    if (Number.isNaN(precio) || precio <= 0) {
      alert('El precio debe ser un número mayor que cero.');
      return false;
    }
    return true;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!validarFormulario()) {
      return;
    }
    const productoFinal = {
      nombre: datosForm.nombre,
      precio: Number(datosForm.precio),
      descripcion: datosForm.descripcion,
      imagen: datosForm.imagen
    };
    onSubmit(productoFinal);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h3>{productoAEditar ? 'Editar producto' : 'Agregar nuevo producto'}</h3>
      <input
        type="text"
        value={datosForm.nombre}
        onChange={(e) => setDatosForm({ ...datosForm, nombre: e.target.value })}
        placeholder="Nombre"
      />
      <input
        type="number"
        value={datosForm.precio}
        onChange={(e) => setDatosForm({ ...datosForm, precio: e.target.value })}
        placeholder="Precio"
        min="0"
        step="0.01"
      />
      <textarea
        value={datosForm.descripcion}
        onChange={(e) => setDatosForm({ ...datosForm, descripcion: e.target.value })}
        placeholder="Descripción"
      />
      <input
        type="text"
        value={datosForm.imagen}
        onChange={(e) => setDatosForm({ ...datosForm, imagen: e.target.value })}
        placeholder="URL de la imagen"
      />
      <button type="submit">
        {productoAEditar ? 'Actualizar producto' : 'Agregar producto'}
      </button>
      {productoAEditar && (
        <button type="button" onClick={cancelarEdicion}>
          Cancelar edición
        </button>
      )}
    </form>
  );
};

export default FormularioProducto;
```

Validación de formularios

- `nombre` no puede estar vacío.
- `precio` debe ser un número mayor a cero.
- Si la validación falla, se muestra un `alert` y se detiene el envío.

Puntos clave

- `productoAEditar` se inicia en `null`.
- Si `productoAEditar` tiene un valor, el formulario va a modo edición.
- `useEffect` debe depender de `productoAEditar` para recargar el formulario cuando cambia.
- En modo edición se usa `updateDoc`, en modo creación `addDoc`.

