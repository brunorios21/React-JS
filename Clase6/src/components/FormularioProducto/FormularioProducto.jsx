/**
 * COMPONENTE: FormularioProducto
 * 
 * Tipo: Componente PRESENTACIONAL (Dumb Component)
 * 
 * ¿Qué hace?
 * - Solo se encarga de MOSTRAR el HTML del formulario
 * - NO tiene lógica de negocios
 * - NO maneja estados propios (todo viene por props)
 * - Recibe datos y funciones como props y las utiliza
 * 
 * Props que recibe:
 * - datosForm: Objeto con los valores actuales del formulario
 * - manejarCambio: Función para actualizar campos de texto
 * - manejarCambioImagen: Función especial para capturar archivos
 * - manejarEnvio: Función para procesar el envío del formulario
 * - loading: Booleano que indica si está cargando
 * 
 * Analogía:
 * Este componente es como una PANTALLA DE TELEVISIÓN.
 * Muestra lo que le pides que muestre, pero no decide qué mostrar.
 */

import React from 'react';

export function FormularioProducto({ 
  datosForm, 
  manejarCambio, 
  manejarCambioImagen, 
  manejarEnvio,
  loading 
}) {
  
  // Estilos CSS en objetos de JavaScript (CSS-in-JS)
  // Esto permite que los estilos sean dinámicos y reutilizables
  const formStyle = {
    display: 'flex',           // Usar flexbox para organizar elementos
    flexDirection: 'column',   // Los elementos se apilan verticalmente
    maxWidth: '24rem',         // Ancho máximo de 384px (24 * 16px)
    margin: '3rem auto',       // Centrar el formulario en la página
    padding: '1.5rem',         // Espacio interior
    border: '1px solid #ddd',  // Borde gris claro
    borderRadius: '8px',       // Esquinas redondeadas
    gap: '16px'                // Espacio entre elementos internos
  };

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px' // Espacio entre etiqueta e input
  };

  const inputStyle = {
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px'
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: loading ? '#ccc' : '#007bff',  // Color gris si está cargando, azul si está listo
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: loading ? 'not-allowed' : 'pointer',    // Cambiar cursor según el estado
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease'        // Transición suave de colores
  };

  return (
    // ELEMENTO FORM
    // Elemento HTML que agrupa todos los inputs
    // onSubmit: Se ejecuta cuando el usuario presiona Enter o hace clic en el botón de envío
    <form style={formStyle} onSubmit={manejarEnvio}>
      
      {/* TÍTULO DEL FORMULARIO */}
      <h3>Agregar Nuevo Producto</h3>

      {/* 
        CAMPO 1: NOMBRE DEL PRODUCTO
        
        Flujo:
        1. Usuario escribe en el input
        2. onChange se dispara
        3. Se ejecuta manejarCambio(evento)
        4. El estado datosForm.nombre se actualiza
        5. El input muestra el nuevo valor (value={datosForm.nombre})
      */}
      <div style={divStyle}>
        <label htmlFor="nombre">Nombre del Producto:</label>
        <input
          id="nombre"
          type="text"
          placeholder="Ej: Teclado Mecánico"
          name="nombre"                         // Este atributo es CLAVE para identificar el input
          value={datosForm.nombre}               // El valor viene del estado (Componente Controlado)
          onChange={manejarCambio}               // Cada cambio actualiza el estado
          style={inputStyle}
        />
      </div>

      {/* 
        CAMPO 2: PRECIO
        
        type="number": Solo permite números
        El cambio se maneja de la misma forma que el nombre
      */}
      <div style={divStyle}>
        <label htmlFor="precio">Precio: $</label>
        <input
          id="precio"
          type="number"
          placeholder="Ej: 95"
          name="precio"
          value={datosForm.precio}
          onChange={manejarCambio}
          style={inputStyle}
        />
      </div>

      {/* 
        CAMPO 3: STOCK
        
        type="number": Solo permite números
        Mismo patrón que los campos anteriores
      */}
      <div style={divStyle}>
        <label htmlFor="stock">Stock:</label>
        <input
          id="stock"
          type="number"
          placeholder="Ej: 5"
          name="stock"
          value={datosForm.stock}
          onChange={manejarCambio}
          style={inputStyle}
        />
      </div>

      {/* 
        CAMPO 4: IMAGEN
        
        ⚠️ IMPORTANTE: Este input es DIFERENTE
        
        type="file": Permite seleccionar archivos del dispositivo
        evento.target.files[0]: Accede al primer archivo seleccionado (los archivos son un array)
        
        No usa value porque el navegador no permite establecer archivos por seguridad.
        
        El manejo es diferente: manejarCambioImagen en lugar de manejarCambio
      */}
      <div style={divStyle}>
        <label htmlFor="imagen">Imagen del Producto:</label>
        <input
          id="imagen"
          type="file"
          accept="image/*"                       // Solo aceptar archivos de imagen
          onChange={manejarCambioImagen}         // Función especial para archivos
          style={inputStyle}
        />
      </div>

      {/* 
        BOTÓN DE ENVÍO
        
        type="submit": Hace que el botón dispare el evento onSubmit del form
        
        disabled={loading}: El botón se desactiva mientras se está cargando
        - Evita que el usuario haga clic múltiples veces
        - Mejora la experiencia visual
        
        Texto dinámico: Cambia según el estado de loading (TAREA del proyecto)
      */}
      <button 
        type="submit" 
        style={buttonStyle}
        disabled={loading}
      >
        {/* 
          OPERADOR TERNARIO: condición ? valor_si_es_verdadero : valor_si_es_falso
          
          Si loading es true: Mostrar "Cargando..."
          Si loading es false: Mostrar "Guardar Producto"
        */}
        {loading ? 'Cargando...' : 'Guardar Producto'}
      </button>
    </form>
  );
}
