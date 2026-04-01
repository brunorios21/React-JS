import React from 'react';

// Componente de presentación: solo muestra datos, no maneja lógica
const Button = ({ label, onClick }) => {
  return (
    // Un botón simple que recibe una etiqueta y una función de clic
    <button onClick={onClick} style={{ padding: '10px 20px', margin: '5px' }}>
      {label}
    </button>
  );
};
// Este componente es reutilizable y puede ser utilizado en cualquier parte de la aplicación para crear botones con diferentes etiquetas y comportamientos al hacer clic.
export default Button;