// Componente raíz `App` — ensambla la aplicación dentro del `Layout`.
import React from 'react'
import './App.css'
import Layout from './layout/Layout'
import Greeting from './components/Greeting/Greeting'
import Gallery from './components/Gallery/Gallery'

export default function App() {
  // `Layout` mantiene Header y Footer; aquí colocamos el contenido principal.
  return (
    <Layout>
      <div className="App">
        <h1>Clase 3</h1>
        {/* Componente presentacional que recibe `name` por props */}
        <Greeting name="Estudiante" />
        {/* Galería que muestra tarjetas de producto */}
        <Gallery />
      </div>
    </Layout>
  )
}
