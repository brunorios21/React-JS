// Este archivo contiene ejemplos de datos que puedes usar para llenar Firestore
// Copia manualmente estos datos en Firebase Console

// Colección: "Productos nacionales"
export const ejemploProductos = [
  {
    nombre: "Café Premium Colombiano",
    descripcion: "Café 100% colombiano de las montañas de Boyacá, con notas de chocolate y caramelo",
    precio: 25.50,
    stock: 100,
    categoria: "Bebidas",
    marca: "Café de Montaña",
    createdAt: new Date()
  },
  {
    nombre: "Té Verde Orgánico",
    descripcion: "Té verde de cultivo orgánico, rico en antioxidantes",
    precio: 18.99,
    stock: 75,
    categoria: "Bebidas",
    marca: "Naturaleza Pura",
    createdAt: new Date()
  },
  {
    nombre: "Chocolate Artesanal",
    descripcion: "Chocolate 70% cacao hecho con ingredientes naturales",
    precio: 12.50,
    stock: 50,
    categoria: "Chocolates",
    marca: "Artesanía Gourmet",
    createdAt: new Date()
  },
  {
    nombre: "Mermelada de Fresa",
    descripcion: "Mermelada casera sin conservantes",
    precio: 8.99,
    stock: 120,
    categoria: "Conservas",
    marca: "Casa de Campo",
    createdAt: new Date()
  },
  {
    nombre: "Pan de Quinua",
    descripcion: "Pan integral hecho con harina de quinua enriquecida",
    precio: 5.99,
    stock: 80,
    categoria: "Panadería",
    marca: "Granos Saludables",
    createdAt: new Date()
  }
];

// Colección: "cupones"
export const ejemploCupones = [
  {
    codigo: "BIENVENIDA10",
    descuento: 10,
    createdAt: new Date()
  },
  {
    codigo: "VERANO20",
    descuento: 20,
    createdAt: new Date()
  },
  {
    codigo: "CLIENTE30",
    descuento: 30,
    createdAt: new Date()
  }
];

// Instrucciones para agregar los datos a Firestore:
/*
1. Abre Firebase Console: https://console.firebase.google.com/
2. Selecciona tu proyecto
3. Ve a Firestore Database
4. Crea colección "Productos nacionales"
5. Copia cada objeto del array ejemploProductos y agrega como documento
6. Crea colección "cupones"
7. Copia cada objeto del array ejemploCupones y agrega como documento

Alternativamente, puedes usar un script de Node.js con firebase-admin-sdk
para importar todos los datos de una vez.
*/
