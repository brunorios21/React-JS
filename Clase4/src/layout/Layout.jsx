import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import styles from './Layout.module.css';

// COMPONENTE LAYOUT: Estructura principal de la aplicación
// Este componente actúa como contenedor base que envuelve toda la aplicación
// Proporciona una estructura consistente con:
// - Header en la parte superior (navegación)
// - Main en el centro (contenido dinámico via children)
// - Footer en la parte inferior (información legal)
export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {/* Encabezado: Contiene logo, navegación, etc. */}
      <Header />
      
      {/* Contenido principal: Aquí van los componentes hijos */}
      {/* El parámetro children permite inyectar componentes diferentes */}
      {/* en esta posición sin cambiar el Layout */}
      <main className={styles.main}>{children}</main>
      
      {/* Pie de página: Información de copyright y enlaces legales */}
      <Footer />
    </div>
  );
}