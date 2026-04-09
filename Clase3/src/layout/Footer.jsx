// `Footer` muestra información de pie de página.
import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  // Se usa Date en línea para mantener el año actualizado automáticamente.
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} - Clase 3</p>
    </footer>
  )
}
