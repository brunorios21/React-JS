/**
 * COMPONENTE: Footer
 * 
 * Este es un componente PRESENTACIONAL simple que renderiza
 * el pie de página (footer) de la aplicación.
 * 
 * Características:
 * - Muestra información de copyright
 * - El año se actualiza automáticamente
 * - Usa estilos del módulo CSS
 * 
 * No tiene estado ni efectos secundarios.
 */

import React from 'react';
import styles from './Footer.module.css';

/**
 * COMPONENTE FOOTER
 * 
 * Props:
 * - Ninguna (pero podría recibir: companyName, year, etc.)
 */
export default function Footer() {
  /**
   * AÑO DINÁMICO:
   * 
   * new Date().getFullYear()
   * - Crea un objeto Date con la fecha/hora actual
   * - getFullYear() obtiene el año actual como número
   * - Ejemplo: 2026, 2027, 2028, etc.
   * 
   * Ventaja: El año se actualiza automáticamente cada año.
   * No necesita mantenimiento manual.
   */
  const yearActual = new Date().getFullYear();

  return (
    // ELEMENTO SEMÁNTICO: <footer>
    // Define que este es el pie de página de la aplicación
    <footer className={styles.footer}>
      {/* PÁRRAFO CON INFORMACIÓN DE COPYRIGHT */}
      {/* 
        Contenido dinámico:
        - © : Símbolo de copyright
        - {yearActual} : Año actual obtenido dinámicamente
        - Clase 5 | Uso de useEffect y APIs : Información del curso
      */}
      <p>
        © {yearActual} - Clase 5 | Uso de useEffect y APIs
      </p>
      
      {/* INFORMACIÓN ADICIONAL (opcional) */}
      <p style={{ fontSize: '12px', color: '#999', marginTop: '5px' }}>
        Desarrollado con ❤️ usando React y Vite
      </p>
    </footer>
  );
}

/**
 * MEJORAS FUTURAS:
 * 
 * 1. Hacer componente más reutilizable:
 *    export default function Footer({ companyName = "Mi Empresa", year = null })
 * 
 * 2. Agregar más enlaces:
 *    <footer>
 *      <nav>
 *        <a href="#privacy">Privacidad</a>
 *        <a href="#terms">Términos</a>
 *      </nav>
 *      <p>© {year || new Date().getFullYear()} {companyName}</p>
 *    </footer>
 * 
 * 3. Agregar redes sociales:
 *    <footer>
 *      <div className={styles.social}>
 *        <a href="https://twitter.com/...">Twitter</a>
 *        <a href="https://github.com/...">GitHub</a>
 *      </div>
 *      <p>© {year || new Date().getFullYear()}</p>
 *    </footer>
 */

