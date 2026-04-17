// COMPONENTE HEADER: Encabezado de la aplicación
// Muestra el título principal y la navegación
import React from 'react'
import styles from './Header.module.css'
import Nav from '../components/Nav/Nav'

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Contenedor flexible para distribuir título y navegación */}
      {/* display: flex - Distribuye elementos horizontalmente */}
      {/* alignItems: center - Alinea verticalmente al centro */}
      {/* justifyContent: space-between - Separa título y navegación */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Título principal de la aplicación */}
        <h2>Mi Curso - Clase 4 | Flujo de datos, Hooks y Eventos</h2>
        
        {/* Componente de navegación reutilizable */}
        <Nav />
      </div>
    </header>
  )
}
