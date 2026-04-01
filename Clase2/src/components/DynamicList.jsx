import React, { useState } from 'react';

// Componente que demuestra estructuras dinámicas con JSX
const DynamicList = () => {
    // Estado para manejar la lista de tareas y el nuevo ítem a agregar
  const [items, setItems] = useState(['Aprender JSX', 'Usar Props', 'Crear Componentes']);
  const [newItem, setNewItem] = useState('');
    // Función para agregar un nuevo ítem a la lista, solo si el campo no está vacío
  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };
// Función para eliminar un ítem de la lista basado en su índice
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
// Renderizado del componente con un input para agregar tareas y una lista que muestra las tareas actuales, cada una con un botón para eliminarla
  return (
    <div>
      <h2>Lista Dinámica de Tareas</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={addItem}>Agregar</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)} style={{ marginLeft: '10px' }}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
// Este componente es un ejemplo de cómo manejar estructuras dinámicas en React utilizando JSX, permitiendo a los usuarios agregar y eliminar tareas de una lista de manera interactiva.
export default DynamicList;