import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './layout/Layout';

// COMPONENTE APP: Raíz de la aplicación
// Este componente es el punto de entrada de toda la aplicación
// Integra el Layout (estructura) con el ItemListContainer (lógica de productos)
function App() {
  return (
    <Layout>
      {/* Contenedor principal de productos */}
      <ItemListContainer />
    </Layout>
  );
}

export default App;