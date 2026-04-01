import React from 'react';

// Componente que demuestra JSX y props
const Greeting = ({ name, timeOfDay }) => {
  return (
    <div>
      <h1>Hola, {name}!</h1>
      <p>Buenos {timeOfDay}. Bienvenido a la Clase 2 de Talento Tech.</p>
      {/* JSX permite mezclar HTML con JavaScript */}
      {timeOfDay === 'días' ? (
        <p>¡Es hora de aprender JSX!</p>
      ) : (
        <p>¡Prepárate para componentes dinámicos!</p>
      )}
    </div>
  );
};
// Este componente es un ejemplo de cómo usar JSX para crear una interfaz de usuario que se adapta a las props que recibe, mostrando un saludo personalizado y un mensaje basado en la hora del día.
export default Greeting;