/**
 * COMPONENTE: Layout
 * 
 * Este es un componente CONTENEDOR que proporciona
 * la estructura visual general de toda la aplicación.
 * 
 * Actúa como un "wrapper" (envoltorio) que:
 * 1. Define la estructura HTML principal
 * 2. Importa Header y Footer reutilizables
 * 3. Renderiza el contenido dinámico via children
 * 
 * Patrón: Layout Composition
 * Permite reutilizar la estructura en todas las páginas
 */

import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import styles from './Layout.module.css';

/**
 * COMPONENTE LAYOUT
 * 
 * Props:
 * - children: Contenido dinámico que va en el <main>
 *   (en React, children es una prop especial)
 * 
 * Estructura visual:
 * ┌─────────────────────┐
 * │     HEADER          │
 * ├─────────────────────┤
 * │                     │
 * │     CHILDREN        │  <- contenido dinámico (ItemListContainer)
 * │    (contenido)      │
 * │                     │
 * ├─────────────────────┤
 * │     FOOTER          │
 * └─────────────────────┘
 */
export default function Layout({ children }) {
  return (
    // Contenedor principal que envuelve toda la app
    <div className={styles.container}>
      
      {/* COMPONENTE HEADER */}
      {/* 
        Renderiza el encabezado con:
        - Logo/Título principal
        - Navegación
        - Información de branding
      */}
      <Header />
      
      {/* CONTENIDO PRINCIPAL (children) */}
      {/* 
        <main>: Elemento semántico que define el contenido principal
        
        children es una prop especial en React que representa
        el contenido entre las etiquetas de apertura y cierre:
        
        <Layout>
          <ItemListContainer />  ← Esto es children
        </Layout>
        
        Ventajas:
        - Reutilización: Un Layout para muchas páginas
        - Flexibilidad: El contenido puede variar
        - Separación: Layout no conoce qué renderiza children
      */}
      <main className={styles.main}>
        {children}
      </main>
      
      {/* COMPONENTE FOOTER */}
      {/* 
        Renderiza el pie de página con:
        - Copyright
        - Información legal
        - Año actualizado automáticamente
      */}
      <Footer />
    </div>
  );
}

/**
 * PATRÓN: Layout Composition
 * 
 * Este patrón es muy usado en React para:
 * ✅ Evitar duplicar la estructura en cada página
 * ✅ Mantener consistencia visual
 * ✅ Facilitar cambios globales (ej: cambiar Header)
 * ✅ Separar responsabilidades
 * 
 * Ejemplo de uso en diferentes contextos:
 * 
 * 1. En App.jsx:
 *    <Layout>
 *      <ItemListContainer />  ← Página de productos
 *    </Layout>
 * 
 * 2. En otra página (futura):
 *    <Layout>
 *      <ProductDetail />  ← Página de detalle
 *    </Layout>
 * 
 * 3. En otra página (futura):
 *    <Layout>
 *      <Cart />  ← Página de carrito
 *    </Layout>
 */
