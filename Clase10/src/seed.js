import { db } from './firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { ejemploProductos, ejemploCupones } from './ejemplosDatos';

/**
 * Script para llenar Firestore con datos de ejemplo
 * Ejecutar una sola vez en la consola del navegador o en un useEffect
 */

export const llenarDatosEjemplo = async () => {
  try {
    console.log('🔄 Iniciando carga de datos de ejemplo...');

    // Agregar productos
    console.log('📦 Agregando productos...');
    for (const producto of ejemploProductos) {
      await addDoc(collection(db, 'Productos nacionales'), producto);
    }
    console.log(`✅ ${ejemploProductos.length} productos agregados`);

    // Agregar cupones
    console.log('🎟️ Agregando cupones...');
    for (const cupon of ejemploCupones) {
      await addDoc(collection(db, 'cupones'), cupon);
    }
    console.log(`✅ ${ejemploCupones.length} cupones agregados`);

    console.log('✨ ¡Todos los datos de ejemplo se han cargado!');
    alert('✅ Datos de ejemplo cargados exitosamente. Recarga la página.');
  } catch (error) {
    console.error('❌ Error al cargar datos:', error);
    alert('Error al cargar datos de ejemplo. Ver consola.');
  }
};

// Para usar: abre la consola (F12) y escribe:
// import { llenarDatosEjemplo } from './seed'
// llenarDatosEjemplo()
