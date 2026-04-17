// Punto de entrada de la aplicación
// Importa React, el componente raíz `App` y los estilos globales.
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Renderiza la aplicación en el elemento con id 'root'.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
