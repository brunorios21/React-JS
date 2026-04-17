import React from 'react';
import Item from '../Item/Item';

// COMPONENTE ItemList: Organizador de productos
// Este es un componente presentacional que:
// 1. Recibe un array de productos como prop
// 2. Mapea (itera) sobre cada producto
// 3. Renderiza un componente Item por cada producto
// Usamos "export const" para poder importarlo con destructuring: import { ItemList }
export const ItemList = ({ productos }) => {
    return (
        // Contenedor principal con diseño flexible
        // display: 'flex' - Distribuye elementos en fila
        // flexWrap: 'wrap' - Los elementos se envuelven a nueva línea
        // gap: '20px' - Espacio entre elementos
        // justifyContent: 'center' - Centra horizontalmente
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {/* 
              MAPEO: Recorremos cada producto y creamos un componente Item
              .map() transforma cada elemento del array
              key es importante para React (identifica elementos únicos)
              {...prod} propaga todas las propiedades del producto como props
            */}
            {productos.map((prod) => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};