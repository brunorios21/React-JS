/**
 * COMPONENTE: App
 * 
 * Este es el COMPONENTE RAÍZ (Root Component) de la aplicación React.
 * 
 * Responsabilidades:
 * 1. Integrar el Layout (estructura visual general)
 * 2. Integrar el ItemListContainer (lógica y datos de productos)
 * 3. Servir como punto de entrada de toda la aplicación
 * 
 * Estructura:
 * App (este archivo)
 *  └── Layout (estructura general: header, main, footer)
 *       └── ItemListContainer (carga y gestiona productos)
 *            └── ItemList (presenta los productos)
 *                 └── Item (cada producto individual)
 * 
 * Este componente debe mantenerse lo más simple posible.
 */

import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './layout/Layout';

/**
 * COMPONENTE APP
 * 
 * Función que retorna JSX.
 * No usa estado (useState) ni efectos (useEffect).
 * Solo composición de otros componentes.
 */
function App() {
  return (
    // COMPONENTE Layout
    // Proporciona la estructura visual general de la app:
    // - Header (encabezado)
    // - Main (contenido principal)
    // - Footer (pie de página)
    <Layout>
      {/* 
        COMPONENTE ItemListContainer
        
        Este componente:
        1. Realiza peticiones a la API (fetch)
        2. Maneja estados de carga y error
        3. Pasa datos al ItemList
        
        Props: Ninguna (podría recibir una categoría como prop)
      */}
      <ItemListContainer />
    </Layout>
  );
}

export default App;

/**
 * FLUJO DE DATOS EN LA APP:
 * 
 * 1. App renderiza
 * 2. Layout renderiza su estructura (header, main, footer)
 * 3. ItemListContainer se monta
 * 4. useEffect en ItemListContainer dispara fetch()
 * 5. Mientras carga: mostrar spinner
 * 6. fetch trae datos de /data/productos.json
 * 7. setProductos() actualiza el estado
 * 8. ItemList recibe los productos como prop
 * 9. ItemList mapea productos a componentes Item
 * 10. Cada Item renderiza con sus datos
 * 
 * DATOS FLUYEN HACIA ABAJO (One-way data flow):
 * App → Layout → ItemListContainer → ItemList → Item
 * 
 * EVENTOS SUBEN HACIA ARRIBA (Callbacks):
 * Item (click) → ItemListContainer (manejador) → actualizar estado
 */
