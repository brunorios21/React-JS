import React, { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';

/**
 * COMPONENTE: ItemListContainer
 * 
 * Este es un componente CONTENEDOR (Smart Component) que es responsable de:
 * 1. Gestionar el estado de los productos
 * 2. Realizar peticiones a la API (en este caso, nuestro archivo JSON)
 * 3. Manejar los estados de carga y error
 * 4. Pasar los datos al componente presentacional (ItemList)
 * 
 * La separación entre contenedor y presentacional sigue el patrón de React:
 * - Contenedor (ItemListContainer): Lógica, estado, efectos
 * - Presentacional (ItemList): Solo renderiza lo que recibe
 */
const ItemListContainer = () => {
    
    // ========== ESTADO 1: PRODUCTOS ==========
    // Almacena el array de productos obtenidos de la API
    // - productos: contiene todos los productos del servidor
    // - setProductos: función para actualizar el estado
    // - useState([]): iniciamos con array vacío
    const [productos, setProductos] = useState([]);
    
    // ========== ESTADO 2: CARGANDO ==========
    // Indica si la petición está en proceso
    // - loading: true = esperando respuesta, false = petición completada
    // - setLoading: función para actualizar el estado
    // - useState(true): iniciamos en true (comenzamos a cargar inmediatamente)
    const [loading, setLoading] = useState(true);

    // ========== ESTADO 3: ERROR ==========
    // Guarda información sobre posibles errores en la petición
    // - error: contiene el mensaje de error si ocurre algo
    // - setError: función para actualizar el error
    // - useState(null): iniciamos sin error
    const [error, setError] = useState(null);

    // ========== EFECTO SECUNDARIO: CARGAR PRODUCTOS ==========
    /**
     * useEffect: Hook que permite ejecutar código en momentos específicos
     * 
     * En este caso:
     * - Se ejecuta UNA SOLA VEZ cuando el componente se monta
     * - Realiza una petición al archivo /data/productos.json
     * - Maneja la carga, éxito y errores
     * 
     * Array de dependencias: []
     * - Array vacío = se ejecuta solo en el montaje del componente
     * - Si tuviera variables, se ejecutaría cada vez que cambian
     */
    useEffect(() => {
        
        // Iniciamos el estado de carga en true
        setLoading(true);
        // Limpiamos cualquier error anterior
        setError(null);

        /**
         * PASO 1: Realizar la petición con fetch()
         * 
         * fetch() es una función nativa del navegador que:
         * - Realiza peticiones HTTP
         * - Retorna una Promise
         * - La URL '/data/productos.json' es relativa a la carpeta public
         * 
         * Ejemplo de URL completa: http://localhost:5173/data/productos.json
         */
        fetch('/data/productos.json')
            /**
             * PASO 2: Procesar la respuesta
             * 
             * .then(respuesta => ...):
             * - respuesta es el objeto Response del navegador
             * - Verificamos si respuesta.ok (código 200-299)
             * - Si no está ok, lanzamos un error
             * - Si está ok, convertimos a JSON con respuesta.json()
             */
            .then((respuesta) => {
                // Validación: verificar que la respuesta sea exitosa
                if (!respuesta.ok) {
                    throw new Error(`Error HTTP: ${respuesta.status} - No se pudo cargar el archivo de productos`);
                }
                // Si todo está bien, convertir la respuesta a JSON
                return respuesta.json();
            })
            /**
             * PASO 3: Usar los datos obtenidos
             * 
             * .then(datos => ...):
             * - datos es el array de productos parseado
             * - Actualizamos el estado con los productos
             * - Establecemos loading en false (terminamos de cargar)
             */
            .then((datos) => {
                // Validar que los datos sean un array
                if (Array.isArray(datos)) {
                    setProductos(datos);
                } else {
                    throw new Error('Los datos recibidos no son un array válido');
                }
            })
            /**
             * PASO 4: Capturar errores
             * 
             * .catch(error => ...):
             * - Se ejecuta si hay cualquier error en los pasos anteriores
             * - Guarda el mensaje de error en el estado
             * - Permite mostrar un mensaje al usuario
             */
            .catch((error) => {
                // Guardamos el mensaje de error
                setError(error.message);
                console.error('Error al obtener productos:', error);
            })
            /**
             * PASO 5: Finalizar (siempre se ejecuta)
             * 
             * .finally(() => ...):
             * - Se ejecuta al final, sin importar si hubo error o no
             * - Es perfecto para setear loading en false
             * - Así sabemos que la petición terminó (exitosa o no)
             */
            .finally(() => {
                // Cambiar el estado de carga a false (ya terminó)
                setLoading(false);
            });
            
    }, []);  // Array de dependencias vacío = ejecuta solo al montar el componente

    /**
     * ========== RENDERIZADO CONDICIONAL ==========
     * 
     * Mostramos diferentes contenidos según el estado actual:
     * 1. Si loading === true: Mostrar mensaje de carga
     * 2. Si error !== null: Mostrar mensaje de error
     * 3. Si todo está bien: Mostrar la lista de productos
     * 
     * Esto mejora la experiencia del usuario al informarle el estado
     */
    return (
        <div style={{ padding: '20px' }}>
            {/* Título de la sección */}
            <h2> Tienda de Equipos Fotográficos</h2>
            
            {/* 
              CONDICIÓN 1: ESTADO DE CARGA
              Si loading es true, mostramos un mensaje de carga y un spinner visual
            */}
            {loading && (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                    <p style={{ fontSize: '18px', color: '#666' }}>
                        ⏳ Cargando productos, por favor espere...
                    </p>
                    {/* Spinner visual simple con CSS */}
                    <div style={{
                        display: 'inline-block',
                        width: '30px',
                        height: '30px',
                        border: '3px solid #f3f3f3',
                        borderTop: '3px solid #3498db',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                        marginTop: '10px'
                    }} />
                </div>
            )}
            
            {/* 
              CONDICIÓN 2: ESTADO DE ERROR
              Si error existe (no es null), mostramos el mensaje de error
            */}
            {error && !loading && (
                <div style={{
                    backgroundColor: '#f8d7da',
                    color: '#721c24',
                    padding: '15px',
                    borderRadius: '4px',
                    marginTop: '20px',
                    border: '1px solid #f5c6cb'
                }}>
                    <h3>❌ Error al cargar los productos</h3>
                    <p>{error}</p>
                    <p style={{ fontSize: '14px', marginTop: '10px' }}>
                        Por favor, recarga la página o intenta más tarde.
                    </p>
                </div>
            )}
            
            {/* 
              CONDICIÓN 3: ÉXITO
              Si no hay loading y no hay error, mostramos los productos
            */}
            {!loading && !error && (
                <>
                    {/* Mostramos cuántos productos se cargaron */}
                    <p style={{ color: '#666', marginBottom: '20px' }}>
                        ✓ Se encontraron <strong>{productos.length}</strong> producto{productos.length !== 1 ? 's' : ''} disponible{productos.length !== 1 ? 's' : ''}
                    </p>
                    {/* Pasamos los productos al componente presentacional ItemList */}
                    <ItemList productos={productos} />
                </>
            )}
        </div>
    );
};

export default ItemListContainer;