import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configura tu proyecto de Firebase aquí
// Obtén estas credenciales desde la consola de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDemoKey123456789",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto-id",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);
