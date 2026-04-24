/**
 * COMPONENTE: Header
 * 
 * Este es un componente PRESENTACIONAL que renderiza
 * el encabezado (header) de la aplicación.
 * 
 * Incluye:
 * - Título principal de la aplicación
 * - Componente Nav (navegación)
 * - Estilos con módulo CSS
 * 
 * No tiene estado (es un componente puro).
 */

import React from 'react';
import styles from './Header.module.css';
import Nav from '../components/Nav/Nav';

/**
 * COMPONENTE HEADER
 * 
 * Props:
 * - Ninguna (pero podría recibir: titulo, logo, etc.)
 */
export default function Header() {
  return (
    // ELEMENTO SEMÁNTICO: <header>
    // Define que este es el encabezado de la página
    <header className={styles.header}>
      {/* 
        CONTENEDOR FLEXIBLE (Flexbox)
        
        Propiedades:
        - display: 'flex': Activa el modelo flexbox
        - alignItems: 'center': Alinea verticalmente al centro
        - justifyContent: 'space-between': Separa elementos al máximo
        
        Resultado: El título queda a la izquierda y la navegación a la derecha
      */}
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        
        {/* TÍTULO PRINCIPAL DE LA APLICACIÓN */}
        {/* 
          <h2>: Encabezado nivel 2 (semántica HTML)
          
          Contenido:
          - "Mi Curso" - Nombre del curso
          - "Clase 5" - Número de clase
          - "Uso de useEffect y APIs" - Tema de la clase
        */}
        <h2 style={{ margin: 0, color: '#333' }}>
           Mi Curso - Clase 5 | Uso de useEffect y APIs
        </h2>
        
        {/* COMPONENTE NAVEGACIÓN */}
        {/* 
          <Nav />: Componente reutilizable que contiene los enlaces de navegación
          
          Este componente es importado y renderizado aquí.
          En el futuro, podría recibir props como:
          - links={enlaces} (para pasar links dinámicamente)
          - onNavigate={handler} (para manejar clics en navegación)
        */}
        <Nav />
      </div>
    </header>
  );
}

/**
 * ESTRUCTURA SEMÁNTICA HTML:
 * 
 * <header>: Define el encabezado de la página
 * <h2>: Encabezado de nivel 2 (jerarquía)
 * <nav>: Define una sección de navegación (dentro de <Nav />)
 * 
 * Importancia del HTML Semántico:
 * ✅ Mejor accesibilidad para lectores de pantalla
 * ✅ Mejor SEO (motores de búsqueda entienden la estructura)
 * ✅ Código más legible y mantenible
 * ✅ Herramientas de desarrollo automáticas funcionan mejor
 */

