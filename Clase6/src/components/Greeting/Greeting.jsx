/**
 * COMPONENTE: Greeting
 * 
 * Este es un componente PRESENTACIONAL muy simple que:
 * - Recibe una prop `name` (nombre del usuario)
 * - Muestra un mensaje de bienvenida personalizado
 * - No tiene estado ni efectos secundarios
 * 
 * Ejemplo de uso:
 * <Greeting name="Juan" />
 * 
 * Salida: "Hola, Juan. Bienvenido a la Clase 5."
 */

import React from 'react';
import styles from './Greeting.module.css';

/**
 * PROPS DESESTRUCTURADAS:
 * En lugar de recibir "props" como objeto,
 * desestructuramos directamente { name }
 */
export default function Greeting({ name = "Visitante" }) {
  return (
    // Elemento <p> (párrafo) con estilos del módulo CSS
    <p className={styles.greeting}>
      {/* 
        Comentario en JSX usando: {/* ... */}
        
        Template literal con interpolación:
        - Usa backticks (`): para crear strings dinámicos
        - Usa ${}: para insertar variables
      */
      Hola, <strong>{name}</strong>. Bienvenido a la Clase 5 - Uso de useEffect y APIs.
    </p>
  );
}

