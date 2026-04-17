import React, { useState } from 'react';

// Componente Item: Componente presentacional que muestra un producto individual
// Este es un "componente dumb" que solo se preocupa por mostrar datos y manejar su propio estado
const Item = ({ nombre, precio, stock }) => {
  
  // ESTADO LOCAL: Creamos el estado para saber si es favorito
  // esFavorito: variable que guarda el estado (true = favorito, false = no favorito)
  // setEsFavorito: función para actualizar el estado
  // useState(false): inicializamos el estado en false (no es favorito al principio)
  const [esFavorito, setEsFavorito] = useState(false);
  
  // ESTADO LOCAL: Creamos el estado para la cantidad de productos a comprar
  const [cantidad, setCantidad] = useState(0);

  // MANEJADOR DE EVENTOS: Función que cambia el estado de favorito
  // Al hacer clic, cambia entre true y false (alterna)
  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  // MANEJADOR DE EVENTOS: Función que incrementa la cantidad
  // Solo incrementa si la cantidad es menor que el stock disponible
  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  // MANEJADOR DE EVENTOS: Función que decrementa la cantidad
  // Solo decrementa si la cantidad es mayor que 0
  const decrementar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  // MANEJADOR DE EVENTOS: Función que simula agregar el producto al carrito
  const agregarAlCarrito = () => {
    if (cantidad > 0) {
      // console.log simula el envío de datos al carrito
      console.log(`Se agregaron ${cantidad} unidades de ${nombre} al carrito`);
      // Reiniciamos el contador después de agregar
      setCantidad(0);
    }
  };
  
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '15px', 
      margin: '10px', 
      borderRadius: '8px',
      backgroundColor: '#fff',
      maxWidth: '250px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      
      {/* INDICADOR DE FAVORITO: Cambia de apariencia según el estado */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span 
          onClick={marcarComoFavorito}  // Asignamos el manejador al evento onClick
          style={{ 
            cursor: 'pointer',
            fontSize: '24px',
            fontWeight: 'bold',
            color: esFavorito ? '#FFD700' : '#999'  // Cambia color según estado
          }}
        >
          {/* RENDER CONDICIONAL: Muestra estrella llena o vacía según el estado */}
          {esFavorito ? '⭐' : '☆'}
        </span>
      </div>

      {/* INFORMACIÓN DEL PRODUCTO: Datos recibidos por props */}
      <h3>{nombre}</h3>
      <p style={{ color: '#666', margin: '5px 0' }}>Stock disponible: {stock}</p>
      <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>${precio}</p>

      {/* SELECTOR DE CANTIDAD: Control interactivo para elegir cuánto comprar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '15px 0' }}>
        <button 
          onClick={decrementar}  // Manejador para reducir cantidad
          style={{ 
            padding: '5px 10px',
            cursor: 'pointer',
            border: '1px solid #ddd',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px'
          }}
        >
          -
        </button>
        <p style={{ margin: '0', fontWeight: 'bold', minWidth: '30px', textAlign: 'center' }}>
          {cantidad}
        </p>
        <button 
          onClick={incrementar}  // Manejador para aumentar cantidad
          style={{ 
            padding: '5px 10px',
            cursor: 'pointer',
            border: '1px solid #ddd',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px'
          }}
        >
          +
        </button>
      </div>

      {/* BOTÓN AGREGAR AL CARRITO: Se habilita solo si hay cantidad seleccionada */}
      <button 
        onClick={agregarAlCarrito}  // Manejador para agregar al carrito
        style={{ 
          width: '100%',
          padding: '10px',
          backgroundColor: cantidad > 0 ? '#007BFF' : '#CCC',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: cantidad > 0 ? 'pointer' : 'not-allowed',
          fontWeight: 'bold',
          transition: 'background-color 0.3s'
        }}
        disabled={cantidad === 0}  // Deshabilitado si no hay cantidad
      >
        {cantidad > 0 ? `Agregar al carrito (${cantidad})` : 'Selecciona cantidad'}
      </button>
    </div>
  );
};

export default Item;