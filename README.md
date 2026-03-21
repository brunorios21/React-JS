
# Laboratorio de Git Avanzado y Desarrollo en React JS

Este repositorio ha sido diseñado como un entorno de experimentación técnica para el curso de Talento Tech. El objetivo principal es la convergencia entre el desarrollo de interfaces con React JS y el dominio de estrategias avanzadas de control de versiones.

Como estudiante de la Licenciatura en Gestión de las Tecnologías de la Información en la UNPAZ, este espacio documenta el proceso de aprendizaje en la gestión de estados, hooks y la arquitectura de componentes, bajo un flujo de trabajo profesional de Git.

---

## Tecnologías y Herramientas de Consola

A continuación se presentan los enlaces oficiales para la preparación del entorno de desarrollo.

| Herramienta | Función | Enlace de Descarga |
| :--- | :--- | :--- |
| **Git Bash** | Terminal con emulación Unix para comandos avanzados. | [Sitio Oficial Git](https://git-scm.com/downloads) |
| **Node.js (LTS)** | Entorno de ejecución para React y gestión de paquetes npm. | [Sitio Oficial Node.js](https://nodejs.org/) |
| **Windows Terminal / CMD** | Consola nativa para ejecución de scripts de sistema. | [Microsoft Store](https://aka.ms/terminal) |
| **VS Code** | Entorno de desarrollo integrado (IDE) principal. | [Sitio Oficial VS Code](https://code.visualstudio.com/) |

---

## Instrucciones de Instalación

### 1. Configuración de Git
1. Acceda al enlace de descarga de Git y seleccione la versión para su sistema operativo.
2. Durante el proceso de instalación, active la casilla "Git Bash Here" para facilitar el acceso desde carpetas.
3. Una vez instalado, abra Git Bash y ejecute los siguientes comandos para vincular su identidad:
   * `git config --global user.name "Su Nombre"`
   * `git config --global user.email "su-email@ejemplo.com"`

### 2. Preparación de Node.js y React
1. Descargue e instale la versión LTS de Node.js (recomendada por su estabilidad).
2. Verifique la instalación exitosa abriendo una terminal y escribiendo:
   * `node --version`
   * `npm --version`
3. Para inicializar un proyecto de React dentro de este repositorio, utilice:
   * `npx create-react-app nombre-del-proyecto`

---

## Puntos Claves del Repositorio

* **Flujos de Trabajo No Lineales:** Implementación de `git rebase` para mantener un historial de commits limpio y profesional, evitando merges innecesarios.
* **Modularización en React:** Desarrollo de componentes reutilizables y gestión de lógica mediante Hooks (useState, useEffect).
* **Control de Calidad (Debugging):** Uso de `git bisect` para identificar regresiones en el código y `git reflog` para la recuperación de estados previos.
* **Integración de Talento Tech:** Aplicación de los lineamientos técnicos impartidos en el programa de formación de programación.

---

## Operaciones Frecuentes (Botones de Comandos)

Utilice estos bloques de comando para las tareas diarias en el laboratorio:

### Gestión de Características
### Gestión de Características

---

## Tecnologías y Herramientas Utilizadas

El curso aborda el desarrollo full-stack enfocado en el frontend utilizando el siguiente stack tecnológico:

[![React](https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![Node.js](https://img.shields.io/badge/NODE.JS-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/FIREBASE-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Bootstrap](https://img.shields.io/badge/BOOTSTRAP-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Styled Components](https://img.shields.io/badge/STYLED_COMPONENTS-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![GitHub](https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)

---

## TEMARIO TÉCNICO DETALLADO

| CLASE | TÍTULO Y CONTENIDOS |
| :--- | :--- |
| **CLASE 01** | **INTRODUCCIÓN A REACT:** Instalación con Vite y Node.js. Estructura básica del proyecto y componentes funcionales. |
| **CLASE 02** | **JSX Y COMPONENTES:** Explicación de JSX, patrón contenedor/presentacional y manejo de propiedades (props). |
| **CLASE 03** | **ESTRUCTURA DE COMPONENTES Y NAVEGACIÓN BÁSICA:** Componentes reutilizables (Header, Footer) y aplicación de CSS Global y Modules. |
| **CLASE 04** | **INTRODUCCIÓN A USESTATE:** Gestión del estado local y manejo de eventos (clics, formularios). |
| **CLASE 05** | **USO DE USEEFFECT Y PETICIONES A APIS:** Introducción a efectos secundarios, carga de productos desde APIs y manejo de errores. |
| **CLASE 06** | **REACT ROUTER - RUTAS ESTÁTICAS:** Manejo de onChange/onSubmit, formularios y carga de imágenes a Imgbb. |
| **CLASE 07** | **RUTAS DINÁMICAS Y PROTEGIDAS:** Configuración de React Router y uso de componentes Link para navegación. |
| **CLASE 08** | **INTRODUCCIÓN A CONTEXT API:** Implementación de rutas dinámicas, protegidas y despliegue en Vercel o Netlify. |
| **CLASE 09** | **AUTENTICACIÓN DE USUARIOS:** Implementación de login y uso de Context API para protección de rutas y estado global. |
| **CLASE 10** | **CREACIÓN DE PRODUCTOS - FORMULARIO Y VALIDACIÓN:** Conexión a Firebase y validación de datos en formularios. |
| **CLASE 11** | **LEER, ACTUALIZAR Y ELIMINAR PRODUCTOS:** Operaciones de gestión de datos de productos. |
| **CLASE 12** | **IMPLEMENTACIÓN DEL CRUD COMPLETO:** Conexión de formularios con el estado global y manejo de errores críticos. |
| **CLASE 13** | **ESTILIZACIÓN CON BOOTSTRAP O STYLED-COMPONENTS:** Introducción a librerías de UI y creación de diseños adaptables. |
| **CLASE 14** | **DISEÑO RESPONSIVO Y UX:** Estrategia mobile-first, adaptabilidad y mejores prácticas de diseño UI/UX. |
| **CLASE 15** | **DESPLIEGUE DE LA APLICACIÓN:** Pruebas en entorno de producción y configuración de despliegue final. |
| **CLASE 16** | **REVISIÓN FINAL Y PRESENTACIÓN:** Revisión de código, optimización y presentación del e-commerce funcional. |

---

## PROYECTO FINAL INTEGRADOR: E-COMMERCE

El objetivo de este proyecto final es que los estudiantes apliquen todos los conceptos aprendidos durante el curso de ReactJS en la creación de una aplicación de e-commerce básica. El proyecto debe integrar funcionalidades clave como autenticación de usuarios, manejo de productos mediante un CRUD (Crear, Leer, Actualizar, Eliminar), y un carrito de compras.

### CONTENIDOS MÍNIMOS TÉCNICOS

* **React Router:** Implementación de la librería para manejar navegación simple, avanzada y rutas protegidas.
* **Context API:** Manejo de estado global para carritos de compras o sistemas de autenticación.
* **CRUD de productos:** Desarrollo de operaciones Crear, Leer, Actualizar y Eliminar con validación y retroalimentación visual.
* **Autenticación:** Formulario de login con validación de credenciales y acceso seguro a secciones protegidas.
* **Estilización:** Personalización de la interfaz mediante Bootstrap o styled-components para asegurar coherencia visual.

---

## CONTACTO

[![LinkedIn](https://img.shields.io/badge/LINKEDIN-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/brunorios21)
[![GitHub](https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/brunorios21)
