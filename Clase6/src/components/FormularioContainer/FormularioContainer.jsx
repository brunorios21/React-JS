/**
 * COMPONENTE: FormularioContainer
 * 
 * Tipo: Componente CONTENEDOR (Smart Component / Container Component)
 * 
 * ¿Qué hace?
 * - Contiene TODA la lógica del formulario
 * - Maneja los estados con useState
 * - Define las funciones para actualizar esos estados
 * - Pasa todo al componente presentacional (FormularioProducto)
 * 
 * Analogía:
 * Este componente es como el CEREBRO del formulario.
 * Toma decisiones, procesa información y controla el flujo.
 * 
 * Patrón: Contenedor/Presentacional
 * - FormularioContainer: La lógica (el cerebro)
 * - FormularioProducto: La presentación (la cara)
 */

import React, { useState } from 'react';
import { FormularioProducto } from '../FormularioProducto/FormularioProducto';

export function FormularioContainer() {
  
  /**
   * PASO 1: CREAR EL ESTADO PARA LOS DATOS DEL FORMULARIO
   * 
   * useState es un Hook que nos permite agregar estado a componentes funcionales.
   * 
   * Sintaxis: const [variable, funcion] = useState(valor_inicial)
   * 
   * datosForm: Objeto que contiene TODOS los valores de los campos del formulario
   * setDatosForm: Función para actualizar este objeto
   * 
   * Estado inicial: Todos los campos vacíos
   */
  const [datosForm, setDatosForm] = useState({
    nombre: '',    // Nombre del producto vacío
    precio: '',    // Precio vacío
    stock: ''      // Stock vacío
  });

  /**
   * PASO 2: CREAR UN ESTADO PARA EL ARCHIVO DE IMAGEN
   * 
   * Separamos la imagen en un estado independiente porque:
   * 1. Los archivos se manejan de forma diferente a los campos de texto
   * 2. Necesitamos capturar el archivo completo, no solo el nombre
   * 
   * imagenFile: Guardar el archivo seleccionado por el usuario
   * setImagenFile: Función para actualizar el archivo
   */
  const [imagenFile, setImagenFile] = useState(null);

  /**
   * PASO 3: CREAR UN ESTADO PARA EL INDICADOR DE CARGA (TAREA)
   * 
   * Este estado es parte de la TAREA del proyecto.
   * 
   * loading: Booleano que indica si se está cargando la imagen
   * setLoading: Función para cambiar este estado
   * 
   * Propósito:
   * - Deshabilitar el botón mientras se carga
   * - Mostrar un mensaje de "Cargando..." en lugar de "Guardar Producto"
   * - Mejorar la experiencia del usuario
   */
  const [loading, setLoading] = useState(false);

  /**
   * FUNCIÓN: manejarCambio
   * 
   * Se ejecuta cada vez que el usuario escribe en un input de texto.
   * 
   * Parámetro: evento (el evento onChange del input)
   * 
   * Flujo:
   * 1. Extraemos el "name" y "value" del elemento que disparó el evento
   * 2. Usamos spread operator (...) para copiar el estado actual
   * 3. Actualizamos el campo específico usando computed property names [name]
   * 4. setDatosForm actualiza el estado, provocando un re-render
   * 
   * Ejemplo:
   * - Usuario escribe "Teclado" en el input con name="nombre"
   * - evento.target.name = "nombre"
   * - evento.target.value = "Teclado"
   * - Resultado: datosForm.nombre = "Teclado"
   */
  const manejarCambio = (evento) => {
    // Destructuring: Extraer name y value del objeto evento.target
    const { name, value } = evento.target;
    
    // Actualizar el estado manteniendo los otros campos intactos
    setDatosForm({
      ...datosForm,        // Copiar todos los campos existentes
      [name]: value        // Actualizar solo el campo que cambió
    });
  };

  /**
   * FUNCIÓN: manejarCambioImagen
   * 
   * Se ejecuta cuando el usuario selecciona un archivo de imagen.
   * 
   * Diferencias con manejarCambio:
   * - Accede a evento.target.files (array de archivos seleccionados)
   * - Toma el primer archivo: files[0]
   * - Guarda el archivo completo, no solo el nombre
   */
  const manejarCambioImagen = (evento) => {
    // evento.target.files es un array de archivos seleccionados
    // Tomamos el primero [0] porque solo permitimos un archivo
    setImagenFile(evento.target.files[0]);
  };

  /**
   * FUNCIÓN: manejarEnvio (Mejorada para TAREA)
   * 
   * Se ejecuta cuando el usuario presiona el botón "Guardar Producto".
   * 
   * Pasos:
   * 1. Prevenir recarga de página (preventDefault)
   * 2. Activar loading (TAREA)
   * 3. Validar que haya una imagen
   * 4. Crear FormData para enviar el archivo
   * 5. Hacer petición a Imgbb para subir la imagen
   * 6. Si es exitoso, crear objeto completo del producto
   * 7. Desactivar loading en finally (TAREA)
   */
  const manejarEnvio = async (evento) => {
    // 1. PASO ESENCIAL: Evitar que la página se recargue
    evento.preventDefault();

    // 2. TAREA: Activar el estado de carga
    // Esto deshabilitará el botón y mostrará "Cargando..."
    setLoading(true);

    // 3. Validar que el usuario haya seleccionado una imagen
    if (!imagenFile) {
      alert("Por favor, selecciona una imagen para el producto.");
      setLoading(false);  // Desactivar el indicador si hay error
      return;
    }

    try {
      // --- SUBIR LA IMAGEN A IMGBB ---
      
      // 🚨 IMPORTANTE: Obtener la API Key de las variables de entorno
      // En Vite, accedemos a las variables con: import.meta.env.VITE_NOMBRE_VARIABLE
      // 
      // PASOS para usar esto:
      // 1. Copia .env.example a .env
      // 2. Reemplaza 'YOUR_IMGBB_API_KEY' con tu clave real de imgbb.com
      // 3. Reinicia el servidor (npm run dev) para que los cambios tomen efecto
      const apiKey = import.meta.env.VITE_IMGBB_API_KEY;

      // Validar que la API Key esté configurada
      if (!apiKey || apiKey === 'YOUR_IMGBB_API_KEY') {
        alert('❌ API Key de Imgbb no configurada. Por favor, revisa el archivo .env');
        setLoading(false);
        return;
      }

      // FormData es un objeto especial para enviar archivos
      // No es un objeto JSON normal, sino un formato especial para archivos
      const formData = new FormData();
      formData.append('image', imagenFile);  // Agregar el archivo de imagen

      // Mostrar en consola que estamos iniciando la subida
      console.log("📤 Subiendo imagen a Imgbb...");

      // Hacer una petición POST a la API de Imgbb
      const respuestaImgbb = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: 'POST',           // Método POST para enviar datos
          body: formData            // Enviar el archivo
        }
      );

      // Convertir la respuesta a JSON
      const datosImgbb = await respuestaImgbb.json();

      // --- PROCESAR LA RESPUESTA DE IMGBB ---
      
      // Verificar si la subida fue exitosa
      if (datosImgbb.success) {
        // ✅ Éxito: Imgbb nos devuelve la URL de la imagen
        const urlImagen = datosImgbb.data.url;
        console.log("✅ Imagen subida con éxito. URL:", urlImagen);

        // --- CREAR EL OBJETO FINAL DEL PRODUCTO ---
        
        // Combinar los datos del formulario con la URL de la imagen
        const productoCompleto = {
          ...datosForm,        // Spread: nombre, precio, stock
          urlImagen: urlImagen  // Agregar la URL de la imagen
        };

        // Mostrar en consola el objeto final listo para enviar
        console.log('✨ Producto completo listo para enviar a la API:', productoCompleto);

        // En el futuro, aquí enviaríamos esto a nuestro propio servidor backend
        alert('✅ Producto cargado exitosamente. Revisa la consola para ver los datos.');

        // Limpiar el formulario después del envío exitoso
        setDatosForm({ nombre: '', precio: '', stock: '' });
        setImagenFile(null);

      } else {
        // ❌ Error: Imgbb devolvió success: false
        throw new Error('La subida de la imagen a Imgbb falló.');
      }

    } catch (error) {
      // Capturar cualquier error que ocurra en el proceso
      console.error("❌ Error en el proceso de envío:", error);
      alert("❌ Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
      
    } finally {
      // 7. TAREA: Desactivar el estado de carga SIEMPRE
      // 
      // finally se ejecuta sin importar si el try tuvo éxito o si hubo un catch
      // Esto garantiza que el indicador se desactive en todos los casos:
      // - Si la imagen se subió correctamente
      // - Si hubo un error
      // - Si el usuario cancela la operación
      setLoading(false);
    }
  };

  /**
   * RETURN: Renderizar el componente presentacional
   * 
   * Este contenedor NO renderiza HTML directamente.
   * Solo renderiza el componente FormularioProducto
   * y le pasa como props:
   * - Los datos del estado
   * - Las funciones para manejar cambios
   * - El estado de loading (TAREA)
   */
  return (
    <FormularioProducto
      datosForm={datosForm}              // Datos del formulario
      manejarCambio={manejarCambio}      // Función para inputs de texto
      manejarCambioImagen={manejarCambioImagen}  // Función para input de archivo
      manejarEnvio={manejarEnvio}        // Función para enviar el formulario
      loading={loading}                  // Estado de carga (TAREA)
    />
  );
}
