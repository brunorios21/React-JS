/**
 * COMPONENTE: Gallery
 * 
 * Este es un componente PRESENTACIONAL que muestra
 * una galería de tarjetas de productos.
 * 
 * NOTA IMPORTANTE:
 * En esta versión 5, Gallery tiene datos locales hardcodeados.
 * En la versión final, estos datos deberían venir de ItemListContainer
 * via props, o podrían cargar desde una API propia.
 * 
 * Patrón de arquitectura:
 * - Gallery = Presentacional (solo renderiza)
 * - ItemListContainer = Contenedor (carga datos)
 * 
 * En futuras clases, Gallery podría:
 * - Recibir productos como prop
 * - Tener su propio useEffect para cargar datos
 * - Ser un componente reutilizable
 */

import React from 'react';
import TarjetaProducto from '../TarjetaProducto/TarjetaProducto';
import styles from './Gallery.module.css';

/**
 * DATOS DE EJEMPLO:
 * 
 * Estos son productos hardcodeados para demostración.
 * En una aplicación real, estos datos vendrían de:
 * 1. Props del componente padre
 * 2. Una petición a API (con useEffect)
 * 3. Un estado global (Redux, Context)
 * 
 * Estructura esperada de cada producto:
 * {
 *   id: número único,
 *   nombre: string,
 *   precio: number o string,
 *   imagen: URL string,
 *   descripcion: string (opcional),
 *   stock: number (opcional)
 * }
 */
const productosEjemplo = [
  {
    id: 1,
    nombre: 'Zapatillas Runner Premium',
    precio: 59.99,
    imagen: 'https://via.placeholder.com/400x300?text=Zapatillas',
    descripcion: 'Zapatillas deportivas de alto rendimiento',
    stock: 10
  },
  {
    id: 2,
    nombre: 'Remera Classic Comfort',
    precio: 19.99,
    imagen: 'https://via.placeholder.com/400x300?text=Remera',
    descripcion: 'Remera de algodón 100% puro',
    stock: 25
  },
  {
    id: 3,
    nombre: 'Mochila Urban Explorer',
    precio: 39.99,
    imagen: 'https://via.placeholder.com/400x300?text=Mochila',
    descripcion: 'Mochila resistente al agua con múltiples compartimientos',
    stock: 8
  }
];

/**
 * COMPONENTE FUNCIONAL: Gallery
 * 
 * Props:
 * - (Actualmente no recibe props, pero podría recibir: productos)
 * 
 * Ejemplo futuro:
 * export default function Gallery({ productos = [] })
 */
export default function Gallery() {
  return (
    // ELEMENTO SEMÁNTICO: <section>
    // Define una sección independiente del contenido
    // Aquí usamos un grid CSS para mostrar las tarjetas en una cuadrícula responsiva
    <section className={styles.grid}>
      {/* 
        ========== MAPEO DE PRODUCTOS ==========
        
        .map(producto => ...):
        - Itera sobre cada producto en el array
        - Retorna un componente <TarjetaProducto> por cada uno
        - Transforma datos en componentes visuales
        
        key={p.id}:
        - Prop especial de React para identificar elementos únicos
        - Mejora el rendimiento y evita bugs de renderizado
        - NUNCA usar índice (map((item, index) => ...)) como key
        - Usar un identificador único y estable (id)
        
        {...p}:
        - Operador spread que propaga todas las propiedades del producto
        - Equivalente a:
          imagen={p.imagen}
          nombre={p.nombre}
          precio={p.precio}
          descripcion={p.descripcion}
          stock={p.stock}
      */}
      {productosEjemplo.map(producto => (
        <TarjetaProducto
          key={producto.id}        // Identificador único para React
          {...producto}             // Propagar todas las propiedades
        />
      ))}
    </section>
  );
}

/**
 * PATRONES FUTUROS:
 * 
 * 1. Recibir productos como prop:
 *    export default function Gallery({ productos = [] }) {
 *      return (
 *        <section className={styles.grid}>
 *          {productos.map(p => (
 *            <TarjetaProducto key={p.id} {...p} />
 *          ))}
 *        </section>
 *      );
 *    }
 * 
 * 2. Cargar datos con useEffect:
 *    useEffect(() => {
 *      fetch('/api/productos-gallery')
 *        .then(res => res.json())
 *        .then(datos => setProductos(datos));
 *    }, []);
 * 
 * 3. Mostrar estado de carga:
 *    {loading && <p>Cargando galería...</p>}
 *    {error && <p>Error: {error}</p>}
 *    {!loading && !error && (
 *      <section className={styles.grid}>
 *        {productos.map(p => ...)}
 *      </section>
 *    )}
 */

