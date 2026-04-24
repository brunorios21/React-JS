import React, { useState } from 'react';

/**
 * COMPONENTE: Item
 * 
 * Este es un componente PRESENTACIONAL que muestra un producto individual
 * y permite al usuario interactuar con él (marcar como favorito, seleccionar cantidad).
 * 
 * A diferencia de componentes puramente presentacionales, este SÍ tiene estado local
 * porque manage la interacción del usuario con ese producto específico.
 * 
 * Props recibidas:
 * - id: Identificador único del producto
 * - nombre: Nombre del producto
 * - precio: Precio unitario
 * - stock: Cantidad disponible en inventario
 * - imagen: URL de la imagen (opcional)
 * - descripcion: Descripción del producto (opcional)
 * 
 * Props NO pasadas por padre:
 * - Maneja su propio estado local (cantidad, esFavorito)
 */
const Item = ({ id, nombre, precio, stock, imagen, descripcion }) => {
  
  // ========== ESTADO 1: MARCADO COMO FAVORITO ==========
  /**
   * Controla si el usuario ha marcado este producto como favorito
   * 
   * esFavorito: true = favorito marcado, false = no marcado
   * setEsFavorito: función para actualizar el estado
   * useState(false): inicializamos sin marcar como favorito
   * 
   * Este estado solo afecta a ESTE item específico,
   * no se comparte con otros items
   */
  const [esFavorito, setEsFavorito] = useState(false);
  
  // ========== ESTADO 2: CANTIDAD SELECCIONADA ==========
  /**
   * Almacena cuántas unidades del producto quiere comprar el usuario
   * 
   * cantidad: número de unidades (0, 1, 2, ...)
   * setCantidad: función para actualizar la cantidad
   * useState(0): inicializamos en 0 (no seleccionó nada)
   * 
   * Validaciones:
   * - No puede ser mayor al stock disponible
   * - No puede ser menor que 0
   */
  const [cantidad, setCantidad] = useState(0);

  // ========== MANEJADOR 1: MARCAR COMO FAVORITO ==========
  /**
   * Función que alterna el estado de favorito
   * 
   * Uso: Se llama cuando el usuario hace clic en la estrella
   * Comportamiento: Si es favorito, lo desmarca. Si no es, lo marca.
   * 
   * Operador lógico NOT (!):
   * - !true = false
   * - !false = true
   */
  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
    console.log(`${nombre} marcado como ${!esFavorito ? 'favorito' : 'no favorito'}`);
  };

  // ========== MANEJADOR 2: INCREMENTAR CANTIDAD ==========
  /**
   * Función que aumenta la cantidad en 1
   * 
   * Validación: Solo incrementa si cantidad < stock
   * Ejemplo:
   * - Si hay 5 unidades en stock y cantidad = 4, permite incrementar a 5
   * - Si cantidad = 5 y stock = 5, no permite incrementar más
   */
  const incrementar = () => {
    // Verificar que no supere el stock disponible
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  // ========== MANEJADOR 3: DECREMENTAR CANTIDAD ==========
  /**
   * Función que disminuye la cantidad en 1
   * 
   * Validación: Solo decrementa si cantidad > 0
   * Ejemplo:
   * - Si cantidad = 1, permite decrementar a 0
   * - Si cantidad = 0, no permite decrementar más
   */
  const decrementar = () => {
    // Verificar que no sea menor que 0
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  // ========== MANEJADOR 4: AGREGAR AL CARRITO ==========
  /**
   * Función que simula agregar el producto al carrito
   * 
   * Lógica:
   * 1. Verifica que hay cantidad seleccionada (cantidad > 0)
   * 2. Muestra un mensaje en la consola (simulación de petición)
   * 3. Reinicia el contador de cantidad a 0
   * 
   * En una app real:
   * - Aquí se haría una petición al servidor
   * - O se agregaría al carrito global de la app
   */
  const agregarAlCarrito = () => {
    if (cantidad > 0) {
      // Simulación: enviar a la consola
      console.log(`✅ Se agregaron ${cantidad} unidades de "${nombre}" al carrito`);
      console.log(`Precio total: $${(cantidad * precio).toLocaleString('es-AR')}`);
      
      // Mostrar notificación visual al usuario
      alert(`🛒 ${cantidad} x "${nombre}" agregado al carrito\nTotal: $${(cantidad * precio).toLocaleString('es-AR')}`);
      
      // Reiniciar la cantidad después de agregar
      setCantidad(0);
    }
  };
  
  return (
    <div style={{ 
      border: '1px solid #ddd',
      padding: '15px', 
      margin: '10px', 
      borderRadius: '8px',
      backgroundColor: '#fff',
      maxWidth: '300px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}>
      
      {/* ========== ENCABEZADO: BOTÓN FAVORITO ========== */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        {/* 
          BOTÓN ESTRELLA: Marca/desmarca como favorito
          
          onClick={marcarComoFavorito}:
          - Se ejecuta cuando el usuario hace clic
          
          style con color ternario:
          - Si esFavorito = true: color dorado (#FFD700)
          - Si esFavorito = false: color gris (#999)
          
          {esFavorito ? '' : '☆'}:
          - Si es favorito: muestra estrella rellena
          - Si no: muestra estrella vacía
        */}
        <span 
          onClick={marcarComoFavorito}
          style={{ 
            cursor: 'pointer',
            fontSize: '24px',
            fontWeight: 'bold',
            color: esFavorito ? '#FFD700' : '#ccc',
            transition: 'color 0.2s'
          }}
          title={esFavorito ? 'Remover de favoritos' : 'Agregar a favoritos'}
        >
          {esFavorito ? '⭐' : '☆'}
        </span>
        
        {/* Mostrar ID del producto (referencia) */}
        <span style={{ fontSize: '12px', color: '#999' }}>#{id}</span>
      </div>

      {/* ========== INFORMACIÓN DEL PRODUCTO ========== */}
      {/* Nombre del producto */}
      <h3 style={{ margin: '10px 0', color: '#333' }}>
        {nombre}
      </h3>
      
      {/* Descripción (si existe) */}
      {descripcion && (
        <p style={{ color: '#666', fontSize: '13px', margin: '5px 0' }}>
          {descripcion}
        </p>
      )}
      
      {/* Información de stock */}
      <p style={{ color: stock > 0 ? '#27ae60' : '#e74c3c', margin: '5px 0', fontWeight: 'bold' }}>
        {stock > 0 ? `✓ ${stock} disponibles` : '✗ Agotado'}
      </p>
      
      {/* Precio del producto */}
      <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '10px 0', color: '#2c3e50' }}>
        ${typeof precio === 'number' ? precio.toLocaleString('es-AR') : precio}
      </p>

      {/* ========== SELECTOR DE CANTIDAD ========== */}
      /**
       * Control interactivo para que el usuario elija cuántas unidades comprar
       * 
       * Estructura:
       * [−] [cantidad] [+]
       * 
       * Los botones − y + son interactivos y ejecutan decrementar() e incrementar()
       */
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '10px', 
        margin: '15px 0',
        padding: '10px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px'
      }}>
        {/* BOTÓN MENOS: Decrementa la cantidad */}
        <button 
          onClick={decrementar}
          style={{ 
            padding: '8px 12px',
            cursor: cantidad > 0 ? 'pointer' : 'not-allowed',
            border: '1px solid #ddd',
            backgroundColor: cantidad > 0 ? '#fff' : '#f5f5f5',
            borderRadius: '4px',
            fontWeight: 'bold',
            transition: 'all 0.2s'
          }}
          disabled={cantidad === 0}
          title="Disminuir cantidad"
        >
          −
        </button>
        
        {/* DISPLAY DE CANTIDAD: Muestra el número actual */}
        <p style={{ 
          margin: '0', 
          fontWeight: 'bold', 
          minWidth: '40px', 
          textAlign: 'center',
          fontSize: '18px'
        }}>
          {cantidad}
        </p>
        
        {/* BOTÓN MÁS: Incrementa la cantidad */}
        <button 
          onClick={incrementar}
          style={{ 
            padding: '8px 12px',
            cursor: cantidad < stock ? 'pointer' : 'not-allowed',
            border: '1px solid #ddd',
            backgroundColor: cantidad < stock ? '#fff' : '#f5f5f5',
            borderRadius: '4px',
            fontWeight: 'bold',
            transition: 'all 0.2s'
          }}
          disabled={cantidad >= stock}
          title={cantidad >= stock ? 'Stock máximo alcanzado' : 'Aumentar cantidad'}
        >
          +
        </button>
      </div>
{/* ========== BOTÓN AGREGAR AL CARRITO ========== 
          Botón principal que completa la acción de compra
          
          Estados:
          - Si cantidad > 0: Azul y habilitado
          - Si cantidad === 0: Gris y deshabilitado
          
          onClick={agregarAlCarrito}:
          - Se ejecuta cuando el usuario hace clic
          - Valida que hay cantidad seleccionada
          - Simula agregar al carrito
      */}
      <button 
        onClick={agregarAlCarrito}
        style={{ 
          width: '100%',
          padding: '12px',
          backgroundColor: cantidad > 0 ? '#3498db' : '#bdc3c7',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: cantidad > 0 ? 'pointer' : 'not-allowed',
          fontWeight: 'bold',
          fontSize: '16px',
          transition: 'background-color 0.3s',
        }}
        disabled={cantidad === 0 || stock === 0}
        title={stock === 0 ? 'Producto sin stock' : 'Agregue una cantidad'}
      >
        {cantidad > 0 ? `🛒 Agregar (${cantidad})` : 'Selecciona cantidad'}
      </button>
    </div>
  );
};

export default Item;