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
      <div>
        <label>Nombre</label>
        <input
          type="text"
          value={datosForm.nombre}
          onChange={(e) => setDatosForm({ ...datosForm, nombre: e.target.value })}
        />
      </div>
      <div>
        <label>Precio</label>
        <input
          type="number"
          value={datosForm.precio}
          onChange={(e) => setDatosForm({ ...datosForm, precio: e.target.value })}
          min="0"
          step="0.01"
        />
      </div>
      <div>
        <label>Descripción</label>
        <textarea
          value={datosForm.descripcion}
          onChange={(e) => setDatosForm({ ...datosForm, descripcion: e.target.value })}
        />
      </div>
      <div>
        <label>Imagen</label>
        <input
          type="text"
          value={datosForm.imagen}
          onChange={(e) => setDatosForm({ ...datosForm, imagen: e.target.value })}
        />
      </div>
      {datosForm.imagen && (
        <div>
          <img src={datosForm.imagen} alt={datosForm.nombre} style={{ maxWidth: '150px' }} />
        </div>
      )}
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
