# 🔐 Firebase - Guía de Configuración Rápida

## Paso 1: Crear Proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Crear un proyecto"
3. Nombre: `Clase 10 CRUD`
4. Acepta los términos y crea el proyecto

## Paso 2: Registrar Aplicación Web

1. En el proyecto, haz clic en "</>" para agregar una app web
2. Nombre: `Clase 10 ReactJS`
3. Copia las credenciales que te muestren

## Paso 3: Configurar el Archivo `firebase.config.js`

Reemplaza los valores en `src/firebase.config.js`:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AQUÍ TU apiKey",
  authDomain: "AQUÍ TU authDomain",
  projectId: "AQUÍ TU projectId",
  storageBucket: "AQUÍ TU storageBucket",
  messagingSenderId: "AQUÍ TU messagingSenderId",
  appId: "AQUÍ TU appId"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

## Paso 4: Crear Colecciones en Firestore

### Colección 1: "Productos nacionales"

1. En Firebase, ve a **Firestore Database**
2. Haz clic en **"Crear colección"**
3. Nombre: `Productos nacionales`
4. Auto ID para el primer documento
5. Agrega campos:
   - `nombre` (string): "Café Premium"
   - `descripcion` (string): "Café de alta calidad"
   - `precio` (number): 25.50
   - `stock` (number): 100
   - `categoria` (string): "Bebidas"
   - `marca` (string): "Café de Montaña"

### Colección 2: "cupones"

1. Crear colección: `cupones`
2. Primer documento con:
   - `codigo` (string): "BIENVENIDA10"
   - `descuento` (number): 10

## Paso 5: Configurar Reglas de Firestore

Para desarrollo (⚠️ NO usar en producción):

1. Ve a **Firestore Database > Reglas**
2. Reemplaza con:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

3. Publica las reglas

## Paso 6: Verificar Conexión

1. Ejecuta `npm run dev`
2. Abre la consola (F12)
3. Ve a cualquier página que cargue productos
4. Deberías ver los datos en la página

## 🎯 Llenar con Datos de Ejemplo (Opcional)

```javascript
// En la consola del navegador (F12):
import { llenarDatosEjemplo } from './seed'
llenarDatosEjemplo()
```

## ✅ Checklist de Configuración

- [ ] Proyecto creado en Firebase
- [ ] App web registrada
- [ ] firebase.config.js actualizado
- [ ] Colección "Productos nacionales" creada
- [ ] Colección "cupones" creada
- [ ] Reglas de Firestore configuradas
- [ ] npm run dev funcionando
- [ ] Página de inicio carga sin errores

## 🆘 Troubleshooting

### "Error: Firebase is not defined"
→ Verifica que firebase.config.js esté importado correctamente

### "Permission denied" en Firestore
→ Comprueba las reglas de seguridad en Firebase Console

### No se ven los productos
→ Revisa que la colección se llame exactamente "Productos nacionales"

### Errores en consola sobre CORS
→ Es normal en desarrollo. Los errores de CORS de Firebase no afectan la funcionalidad

---

**¡Listo! Ya puedes usar la aplicación. 🚀**
