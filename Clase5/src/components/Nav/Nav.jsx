/**
 * COMPONENTE: Nav
 * 
 * Este es un componente PRESENTACIONAL que renderiza
 * la barra de navegación principal de la aplicación.
 * 
 * Características:
 * - Muestra enlaces de navegación
 * - No tiene estado (es un componente puro)
 * - Usa elementos semánticos (nav, ul, li)
 * - Aplicado con estilos del módulo CSS
 * 
 * Estructura HTML semántica:
 * <nav>: Define una sección de navegación
 * <ul>: Lista desordenada
 * <li>: Elemento de lista
 * <a>: Enlace
 * 
 * En una aplicación real, usaríamos React Router
 * en lugar de enlaces # simples.
 */

import React from 'react';
import styles from './Nav.module.css';

/**
 * COMPONENTE FUNCIONAL: Nav
 * No recibe props (aunque podría recibir un callback para cambiar de página)
 */
export default function Nav() {
  // Datos de navegación (podrían venir como prop)
  const enlaces = [
    { id: 1, nombre: 'Inicio', href: '#' },
    { id: 2, nombre: 'Productos', href: '#productos' },
    { id: 3, nombre: 'Contacto', href: '#contacto' },
    { id: 4, nombre: 'Carrito', href: '#carrito' }
  ];

  return (
    // ELEMENTO SEMÁNTICO <nav>
    // Define que este es contenido de navegación
    <nav className={styles.nav}>
      {/* LISTA DE NAVEGACIÓN */}
      {/* 
        <ul>: Lista desordenada (unordered list)
        
        En una app real, podríamos usar:
        - React Router (<Link> en lugar de <a>)
        - Estado para la página activa
        - Callbacks para cambiar de página
      */}
      <ul>
        {/* 
          Mapeo de enlaces:
          - Iteramos sobre cada enlace
          - Creamos un <li> con su <a>
          - key={enlace.id} para identificar elementos únicos
        */}
        {enlaces.map((enlace) => (
          <li key={enlace.id}>
            <a 
              href={enlace.href}
              title={`Ir a ${enlace.nombre}`}
              onClick={(e) => {
                // Prevenir comportamiento por defecto
                // En una app real, aquí usaríamos React Router
                console.log(`Navegando a: ${enlace.nombre}`);
              }}
            >
              {enlace.nombre}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

