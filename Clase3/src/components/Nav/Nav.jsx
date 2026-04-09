// Componente `Nav` — barra de navegación simple.
import React from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  // Links de ejemplo; en una app real usaríamos React Router o enlaces reales.
  return (
    <nav className={styles.nav}>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Carrito</a></li>
      </ul>
    </nav>
  )
}
