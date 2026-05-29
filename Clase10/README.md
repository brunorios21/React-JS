#  Clase 10 - CRUD en ReactJS

Proyecto educativo que implementa un sistema completo de CRUD (Crear, Leer, Actualizar, Eliminar) usando React y Firebase.

##  Objetivos de la Clase

- ✅ Comprender el ciclo CRUD
- ✅ Implementar operaciones Create con `addDoc()`
- ✅ Implementar operaciones Delete con `deleteDoc()`
- ✅ Crear componentes de detalle con `useParams()`
- ✅ Gestionar estado con hooks
- ✅ Integración con Firestore

## Estructura del Proyecto

```
src/
├── components/
│   └── NavBar.jsx              # Navegación principal
├── pages/
│   ├── Home.jsx                # Página de inicio
│   ├── ProductosNacionales.jsx # Listar productos (READ)
│   ├── ProductosNacionalesDetalle.jsx # Detalle de producto
│   ├── GestionProductos.jsx    # CRUD de productos
│   └── GestionCupones.jsx      # Ejercicio: CRUD de cupones
├── App.jsx                      # Rutas principales
├── firebase.config.js           # Configuración Firebase
└── index.css                    # Estilos globales
```

##  Configuración Inicial

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar Firebase

Edita `src/firebase.config.js` con tus credenciales de Firebase:

```javascript
const firebaseConfig = {
  apiKey: "tu-api-key",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto-id",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "tu-messaging-sender-id",
  appId: "tu-app-id"
};
```

### 3. Crear Colecciones en Firestore

En Firebase Console, crea las siguientes colecciones:

#### Colección: `Productos nacionales`
Documento de ejemplo:
```javascript
{
  nombre: "Café Premium",
  descripcion: "Café de alta calidad",
  precio: 15.99,
  stock: 50,
  categoria: "Bebidas",
  marca: "Premium Coffee"
}
```

#### Colección: `cupones`
Documento de ejemplo:
```javascript
{
  codigo: "DESCUENTO20",
  descuento: 20,
  createdAt: Timestamp
}
```

##  Iniciar el Proyecto

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:3000`

##  Conceptos Clave

### 1. READ - Leer Datos

```javascript
const productosCollection = collection(db, "Productos nacionales");
const snapshot = await getDocs(productosCollection);
```

### 2. CREATE - Crear Datos

```javascript
const cuponesCollection = collection(db, "cupones");
await addDoc(cuponesCollection, {
  codigo: "DESC50",
  descuento: 50
});
```

### 3. DELETE - Eliminar Datos

```javascript
const docRef = doc(db, "cupones", id);
await deleteDoc(docRef);
```

### 4. Detalle por ID

```javascript
const { id } = useParams();
const docRef = doc(db, "Productos nacionales", id);
const resp = await getDoc(docRef);
```

##  Componentes Principales

### NavBar
Menú de navegación con links a:
- Inicio
- Productos
- Admin (desplegable)
  - Gestionar Productos
  - Gestionar Cupones

### Home
Página de bienvenida con información sobre la clase.

### ProductosNacionales
Lista todos los productos desde Firestore usando `getDocs()`.

### ProductosNacionalesDetalle
Muestra detalles de un producto específico usando `useParams()` y `getDoc()`.

### GestionProductos
Panel CRUD completo para productos:
- CREATE: Formulario para agregar productos
- READ: Lista de productos
- DELETE: Botón para eliminar productos

### GestionCupones  (Ejercicio Práctico)
Panel de gestión de cupones con:
- **CREATE**: Formulario con validación
  - Código del cupón (texto)
  - Porcentaje de descuento (1-100%)
- **READ**: Tabla de cupones
- **DELETE**: Botón para eliminar con confirmación

##  Flujo de Datos

```
Usuario → Evento → Handler → Firebase → Update State → UI Actualizada
```

##  Ejercicio Práctico - Gestión de Cupones

### Requerimientos Funcionales:

1. **Creación de Cupones**
   - Formulario con 2 campos: código y porcentaje
   - Validación de datos
   - Guardar en colección "cupones"

2. **Visualización**
   - Tabla con todos los cupones
   - Mostrar código y descuento

3. **Eliminación**
   - Botón de eliminar por cupón
   - Confirmación previa
   - Actualizar UI en tiempo real

### Requerimientos Técnicos:

- Componente: `GestionCupones.jsx`
- Colección: `cupones`
- Funciones: `addDoc()`, `deleteDoc()`, `doc()`
- Ruta: `/admin/cupones`
- Link en NavBar

##  Recursos

- [Documentación Firebase](https://firebase.google.com/docs/firestore)
- [Documentación React Router](https://reactrouter.com/)
- [React Hooks](https://react.dev/reference/react)

##  Debugging

Si algo no funciona:

1. Verifica que Firebase esté correctamente configurado
2. Revisa la consola del navegador (F12)
3. Confirma que las colecciones existen en Firestore
4. Valida que tengas permisos de lectura/escritura en Firestore Rules

##  Próximos Pasos

- Implementar UPDATE (Actualizar productos/cupones)
- Agregar autenticación
- Mejorar validación con librerías como `react-hook-form`
- Implementar paginación
- Agregar filtros y búsqueda

---

**Hecho con ❤️ para Clase 10 - TalentoTechLab**
