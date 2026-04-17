import React, { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';

// Componente ItemListContainer: Componente contenedor (Smart Component)
// Este componente es responsable de:
// 1. Obtener los datos (en este caso, simulamos una API)
// 2. Manejar el estado de los datos
// 3. Manejar el estado de carga
// 4. Pasar los datos al componente presentacional (ItemList)
const ItemListContainer = () => {
    
    // ESTADO 1: Almacena los productos obtenidos
    // productos: array que contiene la lista de productos
    // setProductos: función para actualizar la lista
    // useState([]): iniciamos con un array vacío
    const [productos, setProductos] = useState([]);
    
    // ESTADO 2: Controla si se está cargando o no
    // loading: true mientras se cargan datos, false cuando termina
    // setLoading: función para actualizar el estado
    // useState(true): iniciamos en true porque comenzamos a cargar
    const [loading, setLoading] = useState(true);

    // EFECTO SECUNDARIO: Se ejecuta cuando el componente se monta
    // useEffect: hook que permite ejecutar código en momentos específicos
    // El array vacío [] al final significa "solo ejecuta cuando monto"
    useEffect(() => {
        
        // Simulamos una llamada a una API usando Promise
        // En una aplicación real, usarías fetch() o axios
        const pedirDatos = new Promise((resolve) => {
            
            // setTimeout simula el tiempo de respuesta del servidor
            // Tardamos 2 segundos (2000 ms) para simular latencia de red
            setTimeout(() => {
                
                // Resolvemos la promesa con un array de productos
                // Cada producto tiene: id, nombre, precio, stock
                resolve([
                    { id: 1, nombre: "FIFA 26", precio: 120000, stock: 10 },
                    { id: 2, nombre: "The Last of Us: Parte 2", precio: 130000, stock: 5 },
                    { id: 3, nombre: "Dark Souls", precio: 130000, stock: 8 }
                ]);
            }, 2000); // 2 segundos de delay
        });

        // Procesamos la respuesta de la promesa
        pedirDatos.then((res) => {
            // Actualizamos el estado con los datos obtenidos
            setProductos(res);
            // Cambiamos el estado de carga a false (ya terminó de cargar)
            setLoading(false);
        });
    }, []);  // Array vacío = se ejecuta solo una vez al montar

    // RENDER CONDICIONAL:
    // Si loading es true, mostramos un mensaje de carga
    // Si loading es false, mostramos los productos
    return (
        <div style={{ padding: '20px' }}>
            <h2>Ferretería de Juancho</h2>
            {loading ? (
                // Mientras se carga
                <p>Cargando productos...</p>
            ) : (
                // Cuando termina la carga, mostramos los productos
                <ItemList productos={productos} />
            )}
        </div>
    );
};

export default ItemListContainer;