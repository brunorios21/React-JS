# Clase 04 | Flujo de datos, Hooks y Eventos

Bienvenido a la Clase 4 del curso de React. En esta clase abordaremos conceptos fundamentales para crear aplicaciones web interactivas y dinámicas.

---

## Indice

1. [Layout en React](#layout-en-react)
2. [Estructura de nuestro proyecto](#estructura-de-nuestro-proyecto)
3. [Estructura y composición de componentes](#estructura-y-composición-de-componentes)
4. [Creación del Layout](#creación-del-layout)
5. [Aplicando estilo: CSS Global vs. CSS Modules](#aplicando-estilo-css-global-vs-css-modules)
6. [Interfaz de Usuario Final](#interfaz-de-usuario-final)
7. [Flujo de datos, Hooks y Eventos](#flujo-de-datos-hooks-y-eventos)
8. [De contenedor a presentacional](#de-contenedor-a-presentacional)
9. [Eventos: Haciendo que las cosas reaccionen](#eventos-haciendo-que-las-cosas-reaccionen)
10. [Estados: Dándole memoria a los componentes](#estados-dándole-memoria-a-los-componentes)
11. [Creación del componente contador](#creación-del-componente-contador)
12. [Uso de useEffect y APIs](#uso-de-useeffect-y-apis)
13. [Objetivos de la clase](#objetivos-de-la-clase)
14. [Ejercicios prácticos](#ejercicios-prácticos)
15. [Preguntas para reflexionar](#preguntas-para-reflexionar)
16. [Próximos pasos](#próximos-pasos)
17. [Recursos adicionales](#recursos-adicionales)

---

## Layout en React

### Concepto fundamental

El layout es la estructura base de nuestra aplicación. Define cómo se distribuyen los elementos principales: encabezado (header), contenido principal y pie de página (footer).

En React, el layout es un componente que engloba a otros componentes y proporciona una estructura consistente a toda la aplicación.

---

## Estructura de nuestro proyecto

```
Clase4/
├── src/
│   ├── components/
│   │   ├── Nav/
│   │   ├── Gallery/
│   │   ├── Greeting/
│   │   ├── Item/
│   │   ├── ItemList/
│   │   ├── ItemListContainer/
│   │   └── TarjetaProducto/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   ├── Footer.jsx
│   │   ├── Footer.module.css
│   │   ├── Layout.jsx
│   │   └── Layout.module.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

Esta estructura organiza nuestros componentes en carpetas temáticas:
- **components/**: Contiene todos los componentes reutilizables de la aplicación
- **layout/**: Contiene los componentes de estructura (Header, Footer, Layout)

---

## Estructura y composición de componentes

### Principio de composición

En React, construimos interfaces complejas mediante la composición de componentes simples. Cada componente tiene una responsabilidad específica y se comunica con otros a través de props.

### Tipos de componentes

**Componentes Contenedor (Smart)**: Manejan la lógica, el estado y las llamadas a APIs. Son responsables de obtener datos.

**Componentes Presentacionales (Dumb)**: Solo reciben props y se encargan de renderizar la interfaz. No tienen estado.

---

## Creación del Layout

### Estructura básica del Layout

El componente Layout es el envase principal que contiene toda la aplicación. Incluye Header, el contenido dinámico (children) y Footer.

```jsx
// src/layout/Layout.jsx
import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
```

### Uso del Layout en App.jsx

```jsx
// src/App.jsx
import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './layout/Layout';

function App() {
  return (
    <Layout>
      <ItemListContainer />
    </Layout>
  );
}

export default App;
```

El parámetro `children` permite inyectar componentes dentro del Layout, manteniendo la estructura consistente en toda la aplicación.

---

## Aplicando estilo: CSS Global vs. CSS Modules

### CSS Global

Los estilos globales se aplican a toda la aplicación. Se definen en archivos CSS tradicionales como `index.css`.

```css
/* src/index.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
}
```

### CSS Modules

Los CSS Modules permiten que los estilos sean locales a un componente específico, evitando conflictos de nombres.

```jsx
// src/layout/Layout.jsx
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {/* ... */}
    </div>
  );
}
```

```css
/* src/layout/Layout.module.css */
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  padding: 20px;
}
```

**Ventajas de CSS Modules**:
- Evita conflictos de nombres de clases
- Facilita el mantenimiento del código
- Mejora la escalabilidad del proyecto

---

## Interfaz de Usuario Final

### Captura de la Aplicación en Ejecución

![Clase 4 - Aplicación en Ejecución](/media/captura-clase4.png)

### Descripción de la Interfaz

La aplicación presenta un diseño profesional y moderno con paleta de colores oscura. Los componentes principales son:

**1. Header (Encabezado)**
- Fondo oscuro (#1e293b) con borde azul cian (#06b6d4)
- Título descriptivo: "Mi Curso - Clase 4 | Flujo de datos, Hooks y Eventos"
- Barra de navegación con enlaces: Inicio, Productos, Contacto, Carrito
- Enlaces en azul cian que contrastan perfectamente con el fondo oscuro

**2. Área Principal (Main)**
- Fondo profesional oscuro (#0f172a)
- Título central: "Ferretería de Juancho"
- Contenedor de productos organizado en una cuadrícula flexible

**3. Tarjetas de Productos (Items)**
- Cada producto es una tarjeta independiente con:
  - **Indicador de Favorito**: Estrella vacía (☆) al inicio, que cambia a estrella llena (⭐) al hacer clic
  - **Nombre del Producto**: Título del artículo (FIFA 26, The Last of Us: Parte 2, Dark Souls)
  - **Stock Disponible**: Número de unidades en inventario
  - **Precio**: Costo unitario del producto
  - **Selector de Cantidad**: Botones (-) y (+) para ajustar la cantidad deseada
  - **Botón de Acción**: "Selecciona cantidad" (deshabilitado hasta que selecciones cantidad)

**4. Footer (Pie de Página)**
- Fondo oscuro con borde azul cian superior
- Texto de copyright con año dinámico: "© 2026 - Clase 4 | Flujo de datos, Hooks y Eventos"

### Características Interactivas Visibles

- **Favoritos Funcionales**: Cada producto puede marcarse como favorito de forma independiente
- **Contador Interactivo**: Los botones + y - permiten incrementar/decrementar la cantidad
- **Validación**: El botón de carrito solo se habilita cuando hay cantidad seleccionada
- **Diseño Responsive**: Las tarjetas se distribuyen en una cuadrícula que se adapta al tamaño de la pantalla
- **Efectos Visuales**: Transiciones suaves y colores que proporcionan feedback al usuario

### Paleta de Colores Profesional

- **Fondo Principal**: #0f172a (Azul marino muy oscuro)
- **Fondo Secundario**: #1e293b (Gris azulado oscuro)
- **Texto Principal**: #f1f5f9 (Blanco muy claro)
- **Acento**: #06b6d4 (Azul cian vibrante)
- **Hover**: #0891b2 (Azul cian más oscuro)

Esta paleta de colores proporciona una experiencia visual profesional, moderna y accesible.

---

## Flujo de datos, Hooks y Eventos

React funciona bajo el concepto de flujo de datos unidireccional. Los datos fluyen desde componentes padres hacia componentes hijos a través de props.

Los hooks permiten que los componentes funcionales usen estado y otras características de React que antes solo estaban disponibles en componentes de clase.

---

## De contenedor a presentacional

### Patrón Contenedor-Presentacional

Este patrón divide la responsabilidad entre componentes:

**Componente Contenedor**: Obtiene los datos, maneja el estado y la lógica.

**Componente Presentacional**: Recibe datos y los muestra en pantalla.

### Ejemplo: Tres componentes, una misión

Para mostrar una lista de productos de forma ordenada, dividimos la tarea en tres componentes especializados:

#### El Cerebro (ItemListContainer)

Es el componente contenedor. Su única misión es tener la lógica y conseguir los datos. No le preocupa cómo se ven.

```jsx
// src/components/ItemListContainer/ItemListContainer.jsx
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';

const ItemListContainer = () => {
    // Estado para almacenar los productos
    const [productos, setProductos] = useState([]);
    
    // Estado para manejar la carga
    const [loading, setLoading] = useState(true);

    // Simulamos una llamada a API
    useEffect(() => {
        const pedirDatos = new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, nombre: "FIFA 26", precio: 120000, stock: 10 },
                    { id: 2, nombre: "The Last of Us: Parte 2", precio: 130000, stock: 5 },
                    { id: 3, nombre: "Dark Souls", precio: 130000, stock: 8 }
                ]);
            }, 2000);
        });

        pedirDatos.then((res) => {
            setProductos(res);
            setLoading(false);
        });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Ferretería de Juancho</h2>
            {loading ? <p>Cargando productos...</p> : <ItemList productos={productos} />}
        </div>
    );
};

export default ItemListContainer;
```

#### El Organizador (ItemList)

Es un intermediario. Recibe la lista completa de datos. Su trabajo es organizar y recorrer la lista, delegando la tarea de mostrar cada ítem individual.

```jsx
// src/components/ItemList/ItemList.jsx
import React from 'react';
import Item from '../Item/Item';

export const ItemList = ({ productos }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {/* Recorremos cada producto y renderizamos un componente Item */}
            {productos.map((prod) => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};
```

#### El Exhibidor (Item)

Es el componente presentacional puro. Solo recibe la información de un único producto y se concentra en mostrarlo de la forma más atractiva posible.

```jsx
// src/components/Item/Item.jsx
import React, { useState } from 'react';

const Item = ({ nombre, precio }) => {
  // Estado local para manejar si es favorito
  const [esFavorito, setEsFavorito] = useState(false);
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      {/* Botón de favoritos */}
      <span onClick={() => setEsFavorito(!esFavorito)} style={{ cursor: 'pointer' }}>
        {esFavorito ? 'FAVORITO' : 'NO FAVORITO'}
      </span>
      <h3>{nombre}</h3>
      <p>${precio}</p>
    </div>
  );
};

export default Item;
```

### El flujo del código de los datos a la vista

El flujo de información es unidireccional y claro:

1. ItemListContainer obtiene los datos y se los pasa a su hijo
2. ItemList recibe la lista, la recorre con `.map()` y renderiza un componente Item por cada producto
3. Item recibe las props de un solo producto y las muestra en pantalla

```
ItemListContainer (obtiene datos)
        ||
        ||  --> (pasa via props)
        ||
    ItemList (organiza)
        ||
        ||  --> (map para cada item)
        ||
      Item (muestra)
```

---

## Eventos: Haciendo que las cosas reaccionen

### Manejo de Eventos en React

Los eventos en React se basan en JavaScript, pero con particularidades para mayor consistencia y seguridad.

**Características principales**:
- Sintaxis camelCase: `onClick` en lugar de `onclick`
- Manejadores como funciones definidas dentro del componente
- Delegación de eventos para mejorar rendimiento

### Eventos Comunes en React

#### onClick

Se activa cuando un elemento es clickeado.

```jsx
export default function Boton() {
  function manejarClick() {
    alert('Botón clickeado!');
  }
  return <button onClick={manejarClick}>Hacer clic</button>;
}
```

#### onChange

Detecta cambios en inputs de formularios.

```jsx
const [nombre, setNombre] = useState('');

return (
  <input 
    value={nombre} 
    onChange={(e) => setNombre(e.target.value)} 
  />
);
```

#### onSubmit

Se dispara cuando un formulario es enviado.

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Formulario enviado');
};

return (
  <form onSubmit={handleSubmit}>
    <button type="submit">Enviar</button>
  </form>
);
```

#### onMouseOver / onMouseOut

Para manejar eventos del mouse.

```jsx
const [hover, setHover] = useState(false);

return (
  <div 
    onMouseOver={() => setHover(true)}
    onMouseOut={() => setHover(false)}
  >
    {hover ? 'En el mouse' : 'Sin mouse'}
  </div>
);
```

---

## Estados: Dándole memoria a los componentes

### Introducción al useState

useState es un hook de React para manejar el estado local en componentes funcionales.

**Funcionamiento**: Declara una variable de estado y una función para actualizarla.

### Sintaxis básica

```jsx
const [valor, setValor] = useState(valorInicial);
```

- `valor`: Variable que almacena el estado actual
- `setValor`: Función para actualizar el estado
- `valorInicial`: Valor con el que inicia el estado

### Ejemplo básico de useState

```jsx
import React, { useState } from 'react';

function Contador() {
    // Creamos el estado con valor inicial 0
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Valor del contador: {contador}</p>
            {/* Incrementamos el contador al hacer clic */}
            <button onClick={() => setContador(contador + 1)}>
                Incrementar
            </button>
            {/* Decrementamos el contador al hacer clic */}
            <button onClick={() => setContador(contador - 1)}>
                Decrementar
            </button>
        </div>
    );
}

export default Contador;
```

### Reglas importantes de useState

**No modificar directamente**: Usa siempre la función proporcionada por useState para actualizar el estado.

```jsx
// INCORRECTO
estado = nuevoValor;

// CORRECTO
setEstado(nuevoValor);
```

**No combinar estados**: Declara múltiples variables de estado por separado si es necesario.

```jsx
// CORRECTO
const [nombre, setNombre] = useState('');
const [edad, setEdad] = useState(0);

// EVITAR
const [datos, setDatos] = useState({ nombre: '', edad: 0 });
```

**Ejecución en cada renderizado**: El componente se vuelve a renderizar cuando el estado cambia.

---

## Creación del componente contador

### Objetivo

Crear un componente que maneje un estado interno y reaccione a eventos de usuario.

### Implementación

```jsx
// src/components/Item/Item.jsx
import { useState } from 'react';

export function Item({ nombre, stock }) {

  // 1. Damos "memoria" al componente
  const [cantidad, setCantidad] = useState(0);

  // 2. Creamos la lógica de la acción
  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <h3>{nombre}</h3>
      {/* 3. Conectamos la acción (onClick) a la lógica */}
      <button onClick={decrementar}>-</button>
      <p>{cantidad}</p>
      <button onClick={incrementar}>+</button>
    </div>
  );
}
```

### Cada Componente Recuerda lo Suyo

Ahora, cada producto en pantalla tiene su propio contador, y son independientes entre sí. Esto se debe a que cada instancia del componente Item tiene su propio estado local.

**¿Por qué funciona?** Porque usamos Estado Local.

**¿Qué es?** Es una "memoria" interna y privada que vive y muere dentro de cada componente.

---

## Uso de useEffect y APIs

### Introducción al manejo de efectos secundarios con useEffect

El hook useEffect permite ejecutar código cuando el componente se monta, cuando se actualiza o cuando se desmonta.

**Sintaxis**:
```jsx
useEffect(() => {
  // Código a ejecutar
}, [dependencias]);
```

### Simulando nuestra propia API

En desarrollo, a menudo necesitamos simular llamadas a APIs antes de conectar con servidores reales.

```jsx
const pedirDatos = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      { id: 1, nombre: "Producto 1", precio: 100 },
      { id: 2, nombre: "Producto 2", precio: 200 }
    ]);
  }, 2000); // Simulamos 2 segundos de carga
});
```

### Integración de useEffect + fetch + useState

```jsx
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulamos una llamada a una API
        const pedirDatos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    { id: 1, nombre: "FIFA 26", precio: 120000, stock: 10 },
                    { id: 2, nombre: "The Last of Us: Parte 2", precio: 130000, stock: 5 }
                ]);
            }, 2000);
        });

        pedirDatos
            .then((res) => {
                setProductos(res);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []); // Array vacío: se ejecuta solo al montar el componente

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    return (
        <div>
            <h2>Nuestros productos</h2>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;
```

### Estados de carga

Es importante manejar tres estados:
- **loading**: true mientras se cargan datos, false cuando termina
- **error**: contiene el error si algo falla
- **productos**: almacena los datos obtenidos

---

## Objetivos de la clase

Alcanzaremos los siguientes objetivos de aprendizaje:

1. Practicar el flujo de datos contenedor-presentacional
2. Manejar eventos comunes en React, como clics
3. Aprender a gestionar el estado local de un componente usando el hook useState
4. Crear una funcionalidad básica para agregar productos a un carrito de compras
5. Entender cómo funcionan los componentes funcionales con hooks
6. Implementar patrones de componentes reutilizables
7. Simular APIs y manejar estados de carga

---

## Ejercicios prácticos

### Tu Primer Trabajo en TalentoLab

Felicidades! Tras haber realizado los ejercicios prácticos, has sido seleccionado para unirte a TalentoLab.

Serás parte del equipo responsable de crear un eCommerce para un cliente.

Tu tarea inicial será crear una funcionalidad básica para el manejo de un e-commerce. Comenzaremos con una actividad sencilla: Marcar productos como favoritos.

### Domina useState con Favoritos

El objetivo de este desafío es que pongas en práctica la gestión de estados con useState para implementar una función clave: marcar productos como favoritos. Es tu oportunidad de brillar.

#### Requisitos del Proyecto

**Interacción Intuitiva de Favoritos**

Al lado del botón "Añadir producto", mostrarás un indicador. Un clic lo "rellena" (cambia de apariencia) para indicar que es un favorito. Otro clic y vuelve a su estado original. Fácil para el usuario, desafiante para ti.

**Estado Individual por Producto**

Cada producto tiene su propia historia de favorito. Es crucial que cada uno maneje su estado de "favorito" de forma independiente. Piensa en la personalización y la reactividad.

#### Pautas Generales

**1. Generación del estado**

Crea el estado con su función y su variable.

```jsx
const [esFavorito, setEsFavorito] = useState(false);
```

**2. Actualización dinámica**

Genera la función marcarComoFavorito que cambie el valor actual de un booleano (si está en true, al llamar a la función pase a false y viceversa).

```jsx
const marcarComoFavorito = () => {
  setEsFavorito(!esFavorito);
};
```

**3. Asignación**

Asígnale la función a una etiqueta en particular, en la posición seleccionada.

```jsx
<span onClick={marcarComoFavorito} style={{ cursor: 'pointer' }}>
  {esFavorito ? 'FAVORITO' : 'NO FAVORITO'}
</span>
```

#### Implementación Completa

```jsx
// src/components/Item/Item.jsx
import React, { useState } from 'react';

const Item = ({ nombre, precio, stock }) => {
  
  // Estado para manejar si el producto es favorito
  const [esFavorito, setEsFavorito] = useState(false);
  
  // Estado para manejar la cantidad
  const [cantidad, setCantidad] = useState(0);

  // Función para marcar como favorito
  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  // Función para incrementar cantidad
  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  // Función para decrementar cantidad
  const decrementar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  // Función para agregar al carrito (simulado)
  const agregarAlCarrito = () => {
    if (cantidad > 0) {
      console.log(`Se agregaron ${cantidad} unidades de ${nombre} al carrito`);
      setCantidad(0); // Reiniciamos el contador
    }
  };

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '15px', 
      margin: '10px', 
      borderRadius: '8px',
      backgroundColor: '#fff',
      maxWidth: '250px'
    }}>
      
      {/* Indicador de favorito */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span 
          onClick={marcarComoFavorito} 
          style={{ 
            cursor: 'pointer',
            fontSize: '20px',
            fontWeight: 'bold',
            color: esFavorito ? '#FFD700' : '#CCC'
          }}
        >
          {esFavorito ? 'FAVORITO' : 'NO FAVORITO'}
        </span>
      </div>

      {/* Información del producto */}
      <h3>{nombre}</h3>
      <p style={{ color: '#666' }}>Stock disponible: {stock}</p>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>${precio}</p>

      {/* Selector de cantidad */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
        <button onClick={decrementar} style={{ padding: '5px 10px' }}>-</button>
        <p style={{ margin: '0' }}>{cantidad}</p>
        <button onClick={incrementar} style={{ padding: '5px 10px' }}>+</button>
      </div>

      {/* Botón agregar al carrito */}
      <button 
        onClick={agregarAlCarrito}
        style={{ 
          width: '100%',
          padding: '10px',
          backgroundColor: cantidad > 0 ? '#007BFF' : '#CCC',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: cantidad > 0 ? 'pointer' : 'not-allowed'
        }}
        disabled={cantidad === 0}
      >
        {cantidad > 0 ? `Agregar al carrito (${cantidad})` : 'Selecciona cantidad'}
      </button>
    </div>
  );
};

export default Item;
```

---

## Reflexión final

Aprendimos dos conceptos clave en React: la gestión del estado local con useState y el manejo de eventos, ambos esenciales para crear aplicaciones web dinámicas e interactivas.

Durante la práctica, aplicamos estos conocimientos para construir una funcionalidad de carrito de compras, simulando una tarea real en el desarrollo de un eCommerce. Esto no solo refuerza los conceptos teóricos, sino que también prepara a los estudiantes para resolver problemas similares en proyectos más complejos.

La gestión del estado nos permitió almacenar y manipular datos dinámicos, mientras que el manejo de eventos nos ayudó a interactuar con el usuario de manera efectiva. Este enfoque modular y práctico fortalece las bases necesarias para avanzar hacia aplicaciones más sofisticadas.

---

## Preguntas para reflexionar

### Ventajas de React

¿Qué beneficios ofrece React al manejar eventos comparado con JavaScript puro?

React proporciona:
- Sintaxis más clara con camelCase
- Gestión automática de delegación de eventos
- Integración directa con el sistema de estado
- Mejor rendimiento gracias a la virtual DOM

### Aprendizajes de Formularios

¿Qué aprendiste al trabajar con formularios en React? ¿Qué desafíos enfrentaste?

Los formularios en React requieren:
- Control de estado para cada input
- Prevención de comportamiento por defecto con preventDefault()
- Manejo de cambios con onChange
- Validación antes de enviar datos

### Extensiones del Proyecto

¿Cómo podrías extender la aplicación para incluir funcionalidades como eliminar productos individuales del carrito?

Extensiones posibles:
- Crear un componente Cart que muestre productos seleccionados
- Agregar persistencia con localStorage
- Implementar un sistema de filtrado por categorías
- Añadir búsqueda de productos

---

## Próximos pasos

### useEffect

El hook useEffect permite ejecutar efectos secundarios en componentes funcionales. Podemos usarlo para:
- Obtener datos de APIs
- Realizar suscripciones
- Actualizar el DOM
- Limpiar recursos

### Peticiones a APIs

En la próxima clase aprenderemos a:
- Hacer peticiones HTTP con fetch
- Manejar respuestas y errores
- Procesar datos de APIs reales
- Cachear resultados

### Manejo de estados de carga

Es importante mejorar la experiencia del usuario:
- Mostrar spinners o loaders mientras se cargan datos
- Mostrar mensajes de error claros
- Implementar reintentos automáticos
- Validar datos antes de mostrarlos

---

## Recursos adicionales

### Documentación oficial

- [React Hooks - useState](https://react.dev/reference/react/useState)
- [Handling Events en React](https://react.dev/learn/responding-to-events)
- [Componentes funcionales](https://react.dev/learn/your-first-component)

### Guías complementarias

- Documentación oficial de React - useState
- React Events Handling - Documentación completa
- Guía completa sobre formularios en React
- Ejercicios prácticos sobre React Hooks

### Herramientas útiles

- React Developer Tools (extensión de navegador)
- VS Code con Pylance para mejor autocompletado
- Vite para desarrollo rápido

---

## Conclusión

Clase 4 te ha proporcionado las herramientas fundamentales para crear componentes interactivos en React. La combinación de:

- Flujo de datos unidireccional (props)
- Gestión de estado con useState
- Manejo de eventos
- Arquitectura contenedor-presentacional

...forma la base de cualquier aplicación React moderna.

Estos conceptos son la puerta de entrada a patrones más complejos como Context API, Redux y otras soluciones de gestión de estado a mayor escala.

Continúa practicando con los ejercicios propuestos y experimenta con tus propias implementaciones. La mejor forma de aprender React es creando proyectos y resolviendo problemas reales.

¡Adelante con tu aprendizaje!
