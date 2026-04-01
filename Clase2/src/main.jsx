import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Este es el punto de entrada de la aplicación React, donde se renderiza el componente raíz (App) dentro del elemento con id 'root' en el HTML. Se utiliza ReactDOM.createRoot para habilitar las características de React 18, como el modo concurrente.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)