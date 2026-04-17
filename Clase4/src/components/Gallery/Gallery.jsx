// `Gallery` muestra una colección de `TarjetaProducto`.
import React from 'react'
import TarjetaProducto from '../TarjetaProducto/TarjetaProducto'
import styles from './Gallery.module.css'

// Datos de ejemplo; se recomienda mover esto a `src/data/productos.json`.
const productos = [
  { id: 1, nombre: 'Zapatillas Runner', precio: '$59.99', imagen: 'https://via.placeholder.com/400x300?text=Zapatillas' },
  { id: 2, nombre: 'Remera Classic', precio: '$19.99', imagen: 'https://via.placeholder.com/400x300?text=Remera' },
  { id: 3, nombre: 'Mochila Urban', precio: '$39.99', imagen: 'https://via.placeholder.com/400x300?text=Mochila' }
]
// En una app real, `Gallery` podría recibir los productos como prop o cargarlos desde un API.
export default function Gallery() {
  return (
    // Usamos un grid CSS para mostrar las tarjetas de productos en una cuadrícula responsiva.
    <section className={styles.grid}>
      {/* Usar key estable (id) para la reconciliación de React */}
      {productos.map(p => (
        <TarjetaProducto key={p.id} imagen={p.imagen} nombre={p.nombre} precio={p.precio} />
      ))}
    </section>
  )
}
