import React from 'react';
import Greeting from './components/Greeting';
import Button from './components/Button';
import UserList from './components/UserList';
import DynamicList from './components/DynamicList';
import './App.css';

function App() {
  const handleClick = () => {
    alert('¡Botón clickeado! Esto demuestra el uso de props para pasar funciones.');
  };
// Componente principal que integra todos los ejemplos de la clase
  return (
    // Estructura principal de la aplicación, demostrando JSX, props, componentes contenedores y dinámicos
    <div className="App">
      <h1>Clase 2: JSX y Componentes - Talento Tech</h1>
      
      {/* Demostración de JSX y props */}
      <Greeting name="Estudiante" timeOfDay="días" />
      
      {/* Componente reutilizable con props */}
      <div style={{ margin: '20px 0' }}>
        <h2>Componente Reutilizable con Props</h2>
        <Button label="Haz clic aquí" onClick={handleClick} />
        <Button label="Otro botón" onClick={() => alert('Otro clic!')} />
      </div>
      
      {/* Componente contenedor vs presentación */}
      <UserList />
      
      {/* Estructuras dinámicas */}
      <DynamicList />
      
      <footer style={{ marginTop: '40px' }}>
        <p>Fin de la demostración de la Clase 2</p>
      </footer>
    </div>
  );
}

export default App;