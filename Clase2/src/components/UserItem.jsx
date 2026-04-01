import React from 'react';

// Componente de presentación: solo muestra datos del usuario
const UserItem = ({ user }) => {
  return (
    <li>
      <strong>{user.name}</strong> - Edad: {user.age}
    </li>
  );
};

export default UserItem;