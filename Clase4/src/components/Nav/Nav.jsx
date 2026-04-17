// COMPONENTE NAV: Barra de navegación principal
// Muestra los enlaces de navegación de la aplicación
import React from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  // Enlaces de ejemplo; en una aplicación real usaríamos React Router o enlaces reales
  // Para esta versión educativa mantenemos enlaces sencillos
  return (
    <nav className={styles.nav}>
      {/* Lista de navegación */}
      {/* ul: lista desordenada */}
      {/* li: elemento de lista */}
      <ul>
        {/* Enlaces de navegación */}
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Carrito</a></li>
      </ul>
    </nav>
  )
}
