// `Header` muestra el título y la navegación principal.
import React from 'react'
import styles from './Header.module.css'
import Nav from '../components/Nav/Nav'

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Layout simple: título a la izquierda, navegación a la derecha */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2>Mi Curso - Clase 3</h2>
        <Nav />
      </div>
    </header>
  )
}
