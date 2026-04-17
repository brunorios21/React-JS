// COMPONENTE FOOTER: Pie de página de la aplicación
// Muestra información de copyright y el año actual actualizado automáticamente
import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  // Se usa Date en línea para mantener el año actualizado automáticamente
  // new Date().getFullYear() obtiene el año actual dinámicamente
  return (
    <footer className={styles.footer}>
      {/* Párrafo con información de copyright */}
      {/* El año se actualiza automáticamente cada año */}
      <p>© {new Date().getFullYear()} - Clase 4 | Flujo de datos, Hooks y Eventos</p>
    </footer>
  )
}
