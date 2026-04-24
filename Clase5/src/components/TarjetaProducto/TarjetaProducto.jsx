/**
 * COMPONENTE: TarjetaProducto
 * 
 * Este es un componente PRESENTACIONAL que muestra visualmente un producto
 * individual en forma de tarjeta (card).
 * 
 * Props esperadas:
 * - imagen: URL de la imagen del producto (string)
 * - nombre: Nombre del producto (string)
 * - precio: Precio del producto (number o string)
 * - descripcion: Descripción del producto (string)
 * - stock: Cantidad disponible en inventario (number)
 * 
 * Este componente NO maneja estado ni efectos secundarios.
 * Solo recibe datos y los renderiza con estilos.
 */

import React from 'react';
import styles from './TarjetaProducto.module.css';

/**
 * PROPS DESESTRUCTURADAS:
 * En lugar de recibir un objeto props, desestructuramos directamente
 * Ejemplo: en lugar de props.imagen, accedemos directamente como imagen
 */
export default function TarjetaProducto({ imagen, nombre, precio, descripcion, stock }) {
  return (
    // ELEMENTO SEMÁNTICO: <article>
    // Usamos <article> en lugar de <div> porque cada tarjeta es contenido independiente
    // Los elementos semánticos mejoran la accesibilidad y SEO
    <article className={styles.card}>
      
      {/* 
        IMAGEN DEL PRODUCTO
        
        Atributos importantes:
        - src: Ruta de la imagen (viene de la prop imagen)
        - alt: Texto alternativo (describe la imagen para lectores de pantalla)
        - className: Aplica estilos CSS del módulo
      */}
      <img 
        src={imagen} 
        alt={nombre}  // Accesibilidad: descripción si la imagen no carga
        className={styles.image}
      />
      
      {/* 
        CONTENEDOR DEL CUERPO DE LA TARJETA
        Aquí van los detalles del producto: nombre, precio, stock, botón
      */}
      <div className={styles.body}>
        
        {/* NOMBRE DEL PRODUCTO */}
        <h3 className={styles.title}>
          {nombre}
        </h3>
        
        {/* 
          DESCRIPCIÓN DEL PRODUCTO
          Proporciona más información al usuario
        */}
        {descripcion && (
          <p className={styles.description}>
            {descripcion}
          </p>
        )}
        
        {/* 
          PRECIO DEL PRODUCTO
          Convertimos a número para aplicar formato de moneda
        */}
        <p className={styles.price}>
          ${typeof precio === 'number' ? precio.toLocaleString('es-AR') : precio}
        </p>
        
        {/* 
          INFORMACIÓN DE STOCK
          Mostramos cuántos productos hay disponibles
          - Si stock > 0: Mostramos "En stock"
          - Si stock === 0: Mostramos "Agotado"
        */}
        <p className={styles.stock}>
          {stock > 0 ? (
            <span style={{ color: '#27ae60' }}>
              ✓ {stock} disponible{stock !== 1 ? 's' : ''}
            </span>
          ) : (
            <span style={{ color: '#e74c3c' }}>
              ✗ Agotado
            </span>
          )}
        </p>
        
        {/* 
          BOTÓN DE ACCIÓN
          En futuras clases, aquí conectaremos la lógica del carrito
          Por ahora, es un botón estático que muestra la interactividad
        */}
        <button 
          className={styles.button}
          onClick={() => {
            // Simulación: mostrar un mensaje cuando se hace clic
            alert(` "${nombre}" agregado al carrito`);
          }}
          disabled={stock === 0}  // Deshabilitar si no hay stock
        >
          {stock > 0 ? 'Agregar al carrito' : 'No disponible'}
        </button>
      </div>
    </article>
  );
}

