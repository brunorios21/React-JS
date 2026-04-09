// Componente `Greeting` — componente presentacional simple.
// Recibe la prop `name` y muestra un mensaje de bienvenida.
import React from 'react'
import styles from './Greeting.module.css'

export default function Greeting({ name }) {
  return (
    // Dentro de JSX se usan comentarios con la sintaxis {/* ... */}
    <p className={styles.greeting}>{/* mensaje de bienvenida */}Hola, {name}. Bienvenido a la Clase 3.</p>
  )
}
