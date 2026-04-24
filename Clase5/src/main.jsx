/**
 * ARCHIVO: main.jsx
 * 
 * Este es el PUNTO DE ENTRADA de la aplicación React.
 * 
 * Responsabilidades:
 * 1. Importar React y las herramientas necesarias
 * 2. Importar el componente raíz (App)
 * 3. Importar estilos globales
 * 4. Renderizar la aplicación en el DOM
 * 
 * Este archivo es ejecutado por Vite automáticamente cuando
 * inicias la aplicación con `npm run dev`.
 * 
 * Es el equivalente a lo que en HTML tradicional sería:
 * <script src="app.js"></script>
 */

// ========== IMPORTACIONES ==========

/**
 * React: Librería principal de React
 * Necesaria para usar JSX y componentes React
 */
import React from 'react';

/**
 * createRoot: Función de React 18 que crea la raíz de la aplicación
 * 
 * Antes (React 17):
 * import ReactDOM from 'react-dom'
 * ReactDOM.render(<App />, document.getElementById('root'))
 * 
 * Ahora (React 18):
 * import { createRoot } from 'react-dom/client'
 * createRoot(document.getElementById('root')).render(<App />)
 */
import { createRoot } from 'react-dom/client';

/**
 * App: Componente raíz de la aplicación
 * Contiene toda la lógica y estructura de la app
 */
import App from './App';

/**
 * index.css: Estilos globales de la aplicación
 * Se aplican a todos los componentes
 */
import './index.css';

// ========== RENDERIZACIÓN ==========

/**
 * PROCESO DE RENDERIZACIÓN:
 * 
 * 1. document.getElementById('root'):
 *    - Busca el elemento <div id="root"></div> en index.html
 *    - Este es el punto de montaje de React
 * 
 * 2. createRoot(...):
 *    - Crea una raíz React en ese elemento del DOM
 *    - Retorna un objeto con método .render()
 * 
 * 3. .render(<React.StrictMode><App /></React.StrictMode>):
 *    - Renderiza el componente App dentro de la raíz
 *    - StrictMode es un envoltorio para detectar problemas
 */
createRoot(document.getElementById('root')).render(
  /**
   * React.StrictMode: Herramienta de desarrollo
   * 
   * Beneficios:
   * ✅ Detecta componentes con ciclos de vida inseguros
   * ✅ Advierte sobre APIs obsoletas
   * ✅ Identifica componentes que no están memoizados
   * ✅ Verifica que el estado se maneja correctamente
   * 
   * NOTA: Solo funciona en desarrollo, no en producción
   * 
   * Ejemplo: Si un efecto se ejecuta dos veces accidentalmente,
   * StrictMode lo detectará y te avisará en la consola.
   */
  <React.StrictMode>
    {/* App: El componente raíz que contiene toda la aplicación */}
    <App />
  </React.StrictMode>
);

/**
 * FLUJO COMPLETO DE INICIALIZACIÓN:
 * 
 * 1. El navegador carga index.html
 * 2. index.html carga Vite
 * 3. Vite ejecuta main.jsx
 * 4. main.jsx importa App.jsx
 * 5. App importa Layout y ItemListContainer
 * 6. ItemListContainer se monta y dispara useEffect
 * 7. useEffect hace fetch a /data/productos.json
 * 8. Los datos se cargan y se renderizan los componentes
 * 9. La aplicación está lista para el usuario
 * 
 * ¡TODO EN MILISEGUNDOS! ⚡
 */

/**
 * DEBUGGING: Si algo no funciona:
 * 
 * 1. Abre la consola (F12)
 * 2. Verifica que no haya errores
 * 3. Verifica que /data/productos.json se cargue (Network tab)
 * 4. Verifica que los componentes rendericen correctamente
 * 5. Usa React DevTools para inspeccionar componentes
 */

