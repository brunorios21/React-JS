import React, { useState } from 'react';
import UserItem from './UserItem';

// Componente contenedor: maneja estado y lógica, delega presentación
const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Juan', age: 25 },
    { id: 2, name: 'María', age: 30 },
    { id: 3, name: 'Pedro', age: 28 }
  ]);

  const addUser = () => {
    const newUser = { id: users.length + 1, name: 'Nuevo Usuario', age: Math.floor(Math.random() * 50) + 18 };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h2>Lista de Usuarios (Componente Contenedor)</h2>
      <button onClick={addUser}>Agregar Usuario</button>
      <ul>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;