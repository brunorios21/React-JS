// Componente `TarjetaProducto` — componente presentacional que muestra la info del producto.
// Props esperadas: `imagen` (url), `nombre` (string), `precio` (string).
import React from 'react'
import styles from './TarjetaProducto.module.css'

export default function TarjetaProducto({ imagen, nombre, precio }) {
  return (
    <article className={styles.card}>
      {/* imagen del producto (agregar alt para accesibilidad) */}
      <img src={imagen} alt={nombre} className={styles.image} />
      <div className={styles.body}>
        <h3 className={styles.title}>{nombre}</h3>
        <p className={styles.price}>{precio}</p>
        {/* Botón de interfaz — en ejercicios posteriores conectaremos acciones al carrito */}
        <button className={styles.button}>Agregar al carrito</button>
      </div>
    </article>
  )
}
