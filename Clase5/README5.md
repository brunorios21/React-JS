#  Clase 5: Uso de useEffect y APIs

##  Descripción General

En esta clase aprendemos a trabajar con **efectos secundarios** en React utilizando el hook **`useEffect`**, y realizamos **peticiones a APIs** para cargar datos dinámicamente. Esto es fundamental para crear aplicaciones que interactúen con servidores y datos en tiempo real.

---

## Temas Cubiertos

### 1. **Introducción a useEffect** 
### 2. **¿Qué son los Efectos Secundarios?**
### 3. **Hook useEffect - Sintaxis y Componentes**
### 4. **Casos Comunes de Uso**
### 5. **Simulando Nuestra Propia API**
### 6. **Realización de Peticiones a APIs**
### 7. **Manejo del Estado de Carga y Errores**

---

##  Objetivos de la Clase

| # | Objetivo |
|---|----------|
| 1️⃣ | Comprender qué son los efectos secundarios y cómo gestionarlos con `useEffect` |
| 2️⃣ | Realizar peticiones a APIs para obtener datos dinámicamente |
| 3️⃣ | Manejar estados de carga y errores para mejorar la experiencia del usuario |

---

## Conceptos Clave

### ¿Qué son los Efectos Secundarios?

Son **operaciones que ocurren fuera del flujo principal de renderizado** de un componente React.

**Ejemplos comunes:**
-  Obtener datos de APIs
-  Manipular el DOM directamente
-  Establecer suscripciones
-  Usar temporizadores (setTimeout, setInterval)
-  Guardar datos en localStorage

**Importancia:** Permiten interactuar con el mundo exterior y manejar operaciones asíncronas de forma segura.

---

##  Hook useEffect

### ¿Para qué sirve?

Permite gestionar **efectos secundarios en componentes funcionales** de React.

### Ventajas

✅ Controla **cuándo** se ejecutan operaciones  
✅ Controla **cómo** afectan al ciclo de vida del componente  
✅ Permite limpiar efectos (cleanup)  
✅ Es más seguro que usar el ciclo de vida directo  

### Sintaxis Básica

```javascript
// ESTRUCTURA GENERAL DE useEffect
useEffect(() => {
  // 1️ CÓDIGO DEL EFECTO (lo que queremos ejecutar)
  console.log('El componente se acaba de mostrar en pantalla.');
  
  // 2️ FUNCIÓN DE LIMPIEZA (opcional - cleanup)
  return () => {
    console.log('El componente se va a desmontar. Limpiando...');
  };
  
}, [/* 3️⃣ ARRAY DE DEPENDENCIAS */]);
```

### Componentes de useEffect

| Componente | Descripción | Ejemplo |
|-----------|-------------|---------|
| **Efecto** | Función que define el efecto secundario a ejecutar | `fetch()`, `console.log()` |
| **Limpieza** | Función opcional que se ejecuta antes de desmontar | Cancelar peticiones, limpiar suscripciones |
| **Dependencias** | Array que indica cuándo ejecutar el efecto | `[]`, `[producto]`, `[count, user]` |

---

##  Ejemplo Básico de useEffect

```javascript
import React, { useEffect } from 'react';

function Mensaje() {
  // Se ejecuta cuando el componente se MONTA
  // []: Array vacío = ejecutar solo una vez
  useEffect(() => {
    console.log(' El componente se ha montado.');
    
    // Limpieza: se ejecuta cuando el componente se DESMONTA
    return () => {
      console.log(' El componente se ha desmontado.');
    };
  }, []);  // Array de dependencias vacío
  
  return <h1>Hola, React!</h1>;
}

export default Mensaje;
```

**Salida en consola:**
```
 El componente se ha montado.
// ... usuario navega a otra página ...
 El componente se ha desmontado.
```

---

##  Casos Comunes de Uso de useEffect

### 1️ Obtener datos de API

```javascript
useEffect(() => {
  fetch('/api/productos')
    .then(res => res.json())
    .then(datos => setProductos(datos));
}, []); // Se ejecuta al montar
```

### 2️ Actualizar el título del documento

```javascript
useEffect(() => {
  document.title = `Productos (${conteo})`;
}, [conteo]); // Se ejecuta cuando cambia conteo
```

### 3 Temporizadores

```javascript
useEffect(() => {
  const timer = setTimeout(() => {
    console.log('¡Pasaron 3 segundos!');
  }, 3000);
  
  // Limpieza: cancelar el timer si el componente se desmonta
  return () => clearTimeout(timer);
}, []);
```

---

##  Realización de Peticiones a APIs

Las peticiones a APIs permiten **cargar datos dinámicamente desde un servidor**. Esto es fundamental para crear aplicaciones que interactúen con datos en tiempo real o contenidos dinámicos.

### Pasos Principales

#### 1️ Usar fetch o axios
Para realizar la petición HTTP.

#### 2️ Gestionar estado local
Almacenar los datos obtenidos.

#### 3️ Usar useEffect
Realizar la petición al montar el componente.

### Ejemplo: Obtener productos desde una API

```javascript
import React, { useEffect, useState } from 'react';

function Productos() {
  // Estado para almacenar los productos
  const [productos, setProductos] = useState([]);

  // Efecto para cargar los productos al montar
  useEffect(() => {
    fetch('https://api.ejemplo.com/productos')
      .then((respuesta) => respuesta.json())
      .then((datos) => setProductos(datos))
      .catch((error) => console.error('Error:', error));
  }, []); // Se ejecuta solo al montar

  return (
    <ul>
      {productos.map((producto) => (
        <li key={producto.id}>{producto.nombre}</li>
      ))}
    </ul>
  );
}

export default Productos;
```

---

##  Estructura de Carpetas

###  Carpeta `src` (Source)
**El corazón de la App**

- Aquí vive todo el código React: componentes, lógica, estilos
- Vite lo procesa, optimiza y empaqueta para el navegador
- Para usar algo de `src`, siempre lo importamos

###  Carpeta `public`
**La vidriera pública**

- Aquí van los "assets" estáticos: imágenes, fuentes y archivos de datos (JSON)
- No se procesa. Se copia tal cual a la versión final
- Podemos acceder a estos archivos directamente con una URL

**Estructura recomendada:**
```
public/
├── images/          (imágenes de productos)
└── data/
    └── productos.json  (datos simulados de API)
```

---

##  Preparando productos.json

### 1️ Crear carpetas y archivo

```bash
# Crear carpetas en public/
public/data/
public/images/

# Crear archivo JSON
public/data/productos.json
```

### 2️ Contenido JSON

```json
[
  {
    "id": 1,
    "nombre": "Cámara Instantánea",
    "precio": 85000,
    "stock": 22,
    "imagen": "/images/CamaraInstantanea.png",
    "descripcion": "Cámara instantánea clásica con flash incorporado"
  },
  {
    "id": 2,
    "nombre": "Lente Gran Angular",
    "precio": 45000,
    "stock": 15,
    "imagen": "/images/LenteGranAngular.png",
    "descripcion": "Lente de 24mm con apertura f/2.8"
  }
]
```

**Formato:** Array de objetos.  
** IMPORTANTE:** ¡La ruta de la imagen debe empezar con `/`!

---

##  Usando fetch para acceder a los datos

### Cómo funciona fetch()

```javascript
// Paso 1: Iniciar la petición
fetch('/data/productos.json')
  
  // Paso 2: Procesar la respuesta
  .then(respuesta => respuesta.json())
  
  // Paso 3: Usar los datos
  .then(datos => {
    console.log('¡Productos cargados!', datos);
  })
  
  // Paso 4: Capturar errores
  .catch(error => {
    console.error('¡Ups! Hubo un error:', error);
  });
```

### Desglose de cada paso

| Paso | Método | Descripción |
|------|--------|-------------|
| 1️ | `fetch()` | Inicia la petición del recurso |
| 2️ | `.then(res => res.json())` | Procesa la respuesta y la convierte a JSON |
| 3️ | `.then(data => { ... })` | Accede a los datos ya transformados |
| 4️ | `.catch(error => { ... })` | Captura errores en la petición |

### Ejemplo completo

```javascript
// Ejemplo en main.jsx
fetch('/data/productos.json')
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log('¡Productos cargados!', datos);
  })
  .catch(error => {
    console.error('¡Ups! Hubo un error:', error);
  });
```

---

##  Verificar la conexión

### 1️ Ejecuta el proyecto

```bash
npm run dev
```

### 2️ Abre las Herramientas de Desarrollador

En tu navegador, presiona **F12** o haz **clic derecho > Inspeccionar**.

### 3️ Ve a la pestaña Consola

Deberías ver tu array de productos impreso.  
**¡Significa que tu `fetch` funcionó! ✅**

---

##  Manejo del Estado de Carga y Errores

###  Importancia

Mejora la experiencia del usuario al informar sobre el estado de las peticiones:
- "Estoy cargando..."
- "Ocurrió un error"
- "Éxito! Aquí están los datos"

###  Implementación

Usa estados adicionales para controlar la carga y los posibles errores.

---

##  Estado de Carga

### Definición
Indica si los datos están en proceso de ser obtenidos.

### Uso
Muestra un spinner o mensaje mientras se cargan los datos.

### Implementación
```javascript
const [cargando, setCargando] = useState(true);
```

---

##  Estado de Error

### Definición
Guarda información sobre posibles fallos en la petición.

### Implementación
```javascript
const [error, setError] = useState(null);
```

### Uso
Informa al usuario si ocurre un problema al cargar los datos.

---

##  Ejemplo Completo: Pedir datos y tomar errores

### Parte 1: Importaciones y Estado

```javascript
import React, { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';

function Productos({ Mensaje }) {
  // Estado 1: Almacena los productos
  const [productos, setProductos] = useState([]);
  
  // Estado 2: Controla si está cargando
  const [error, setError] = useState(null);
  
  // Estado 3: Almacena errores
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/data/productos.json')
      .then((respuesta) => {
        // Validar que la respuesta sea exitosa
        if (!respuesta.ok) {
          throw new Error('No se pudo cargar la información de los productos');
        }
        return respuesta.json();
      })
      .then((datos) => {
        // Usar los datos
        setProductos(datos);
      })
      .catch((error) => {
        // Capturar el error
        setError(error.message);
      })
      .finally(() => {
        // Siempre se ejecuta al final
        setCargando(false);
      });
  }, []);
  
  // Continúa en Parte 2...
}

export default Productos;
```

### Parte 2: Renderizado Condicional

```javascript
// Continuación del componente Productos...

  // CONDICIÓN 1: Si está cargando, mostrar mensaje
  if (cargando) {
    return <p>Cargando productos, por favor espere...</p>;
  }
  
  // CONDICIÓN 2: Si hay error, mostrarlo
  if (error) {
    return <p>Error: {error}</p>;
  }
  
  // CONDICIÓN 3: Si todo está bien, mostrar los productos
  return (
    <div>
      <h1>{Mensaje}</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {/* Mostrar los datos del producto */}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

##  Diferencia entre useState y useEffect

| Característica | useState | useEffect |
|---|---|---|
| **Propósito** | Gestiona estado del componente | Maneja efectos secundarios |
| **Cuándo se ejecuta** | Inmediatamente al renderizar | En momentos específicos del ciclo de vida |
| **Actualiza DOM** | Sí, automáticamente | Depende del efecto |
| **Ejemplo** | `const [count, setCount] = useState(0)` | `useEffect(() => { fetch(...) }, [])` |

---

##  Proyecto Práctico: Tienda de Equipos Fotográficos

###  Características

1. **Carga de productos desde JSON**
   - Archivo ubicado en `public/data/productos.json`
   - Incluye: id, nombre, precio, stock, imagen, descripción

2. **Manejo de estados**
   -  Cargando: spinner y mensaje
   -  Error: mensaje de error amigable
   -  Éxito: lista de productos

3. **Componentes**
   - `ItemListContainer`: Contenedor que carga datos
   - `ItemList`: Presentacional que mapea productos
   - `Item`: Producto individual con interactividad
   - `TarjetaProducto`: Tarjeta visual del producto

---

##  Código de Ejemplo: ItemListContainer

```javascript
import React, { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';

const ItemListContainer = () => {
  // ========== ESTADOS ==========
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ========== EFECTO ==========
  useEffect(() => {
    setLoading(true);
    setError(null);

    // Realizar petición
    fetch('/data/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        return respuesta.json();
      })
      .then((datos) => {
        if (Array.isArray(datos)) {
          setProductos(datos);
        } else {
          throw new Error('Los datos recibidos no son un array válido');
        }
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error al obtener productos:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // ========== RENDERIZADO ==========
  return (
    <div style={{ padding: '20px' }}>
      <h2>📸 Tienda de Equipos Fotográficos</h2>
      
      {/* Estado de carga */}
      {loading && <p>⏳ Cargando productos...</p>}
      
      {/* Estado de error */}
      {error && !loading && (
        <div style={{ backgroundColor: '#f8d7da', padding: '15px', borderRadius: '4px' }}>
          <h3>❌ Error</h3>
          <p>{error}</p>
        </div>
      )}
      
      {/* Estado de éxito */}
      {!loading && !error && (
        <>
          <p>✓ Se encontraron <strong>{productos.length}</strong> productos</p>
          <ItemList productos={productos} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
```

---

##  Referencias y Recursos

### Documentación Oficial
- [React Documentation - useEffect](https://react.dev/reference/react/useEffect)
- [MDN - Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [JavaScript Promises](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises)

### Conceptos Relacionados
-  Componentes funcionales vs de clase
-  Hooks en React
-  Promesas y Async/Await
-  Manejo de errores

---

##  Preguntas para Reflexionar

### 1️ useEffect vs useState
**¿Qué diferencia a useEffect de otros hooks como useState?**

`useState` maneja el **estado del componente** y dispara re-renders.  
`useEffect` maneja **efectos secundarios** en momentos específicos del ciclo de vida.

### 2️ Dependencias
**¿Cómo decidir qué variables incluir en el array de dependencias?**

- `[]` = Ejecutar solo al montar
- `[variable]` = Ejecutar cuando variable cambia
- Sin array = Ejecutar en cada render (⚠️ cuidado)

### 3️ Estados de carga
**¿Por qué es importante manejar estados de carga y errores?**

- Mejora la **experiencia del usuario**
- Evita **renderizados erróneos**
- Permite **debugging** más fácil

### 4️ Peticiones múltiples
**¿Cómo podrías integrar múltiples peticiones a APIs en un solo componente sin afectar el rendimiento?**

- Usar `Promise.all()` para peticiones paralelas
- Usar `Promise.allSettled()` si algunas pueden fallar
- Considerar usar librerías como `SWR` o `React Query`

---

##  Próximos Pasos

- [ ] Implementar `async/await` en lugar de `.then()`
- [ ] Usar librerías como **Axios** para peticiones más complejas
- [ ] Crear un **custom hook** para reutilizar la lógica de fetch
- [ ] Integrar con **localStorage** para cachear datos
- [ ] Aprender sobre **React Query** o **SWR** para gestión de datos

---

##  Conclusión

En esta clase hemos aprendido a:

 **Gestionar efectos secundarios** con `useEffect`  
 **Realizar peticiones a APIs** con `fetch`  
 **Manejar estados de carga y errores** para mejorar la UX  
 **Organizar archivos** en carpetas públicas y fuente  
 **Crear componentes reutilizables** y bien documentados  

Estas habilidades son **esenciales** para construir aplicaciones React que interactúen con datos externos, brindando una experiencia de usuario fluida y profesional. Al dominar estos conceptos, estarás preparado para desarrollar aplicaciones más completas y robustas.

---

##  Resumen de Archivos Importantes

| Archivo | Descripción |
|---------|-------------|
| `src/components/ItemListContainer/ItemListContainer.jsx` | Componente contenedor con fetch y manejo de estados |
| `src/components/ItemList/ItemList.jsx` | Componente presentacional que mapea productos |
| `src/components/Item/Item.jsx` | Producto individual con interactividad |
| `public/data/productos.json` | Base de datos de productos (simulada) |
| `public/images/` | Carpeta para imágenes de productos |

---