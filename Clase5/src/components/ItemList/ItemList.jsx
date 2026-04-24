import React from 'react';
import Item from '../Item/Item';

/**
 * COMPONENTE: ItemList
 * 
 * Este es un componente PRESENTACIONAL (Dumb Component) que:
 * - Recibe un array de productos como prop
 * - NO tiene estado propio (no usa useState ni useEffect)
 * - Solo se encarga de renderizar la lista de productos
 * - Es reutilizable en diferentes contextos
 * 
 * Ventajas de componentes presentacionales:
 * - Son más simples y predecibles
 * - Son más fáciles de testear
 * - Pueden ser reutilizados en otros lugares
 * - Separan la lógica del renderizado
 * 
 * Usamos "export const" para poder importarlo con destructuring:
 * import { ItemList } from '../ItemList/ItemList'
 */
export const ItemList = ({ productos }) => {
    return (
        // Contenedor principal con diseño FLEXBOX
        // Características:
        // - display: 'flex': Activa el modelo flexbox
        // - flexWrap: 'wrap': Los elementos se envuelven a nueva línea si no caben
        // - gap: '20px': Espacio uniforme entre elementos
        // - justifyContent: 'center': Centra los elementos horizontalmente
        <div style={{ 
            display: 'flex',      // Activa flexbox
            flexWrap: 'wrap',     // Permite que se envuelvan
            gap: '20px',          // Espacio entre cards
            justifyContent: 'center' // Centrado
        }}>
            {/* 
              ========== MAPEO DE PRODUCTOS ==========
              
              .map(producto => ...):
              - Método de array que transforma cada elemento
              - Itera sobre cada producto en el array
              - Retorna un componente Item por cada producto
              
              key={prod.id}:
              - Prop especial de React para identificar elementos únicos
              - Importante para rendimiento y actualización de DOM
              - NUNCA usar índice como key si la lista cambia
              
              {...prod}:
              - Operador spread que propaga todas las propiedades
              - Equivale a: id={prod.id} nombre={prod.nombre} precio={prod.precio} ...
              - Simplifica el código cuando hay muchas props
            */}
            {productos.map((prod) => (
                <Item 
                    key={prod.id}  // Identificador único para React
                    {...prod}      // Propagar todas las propiedades del producto
                />
            ))}
        </div>
    );
};