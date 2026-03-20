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
```bash
# Crear nueva rama de desarrollo para un componente
git checkout -b feature/nombre-componente

// --- [ REACT JS & VITE ] ---
npm create vite@latest .      // Iniciar proyecto (Vite)
npm run dev                   // Correr servidor local
npm install <package>         // Instalar dependencias
rafce                         // Snippet: Componente funcional 

// --- [ HOOKS & LOGIC ] ---
useState                      // Manejo de estados
useEffect                     // Efectos secundarios (API, DOM)
useContext                    // Estado global
useParams                     // Parámetros de URL (Routing)

// --- [ GIT & WORKFLOW ] ---
git add .                     // Preparar cambios
git commit -m "feat: ..."     // Documentar avance
git push origin main          // Subir a la nube
git pull                      // Bajar cambios

// --- [ TERMINAL SHORTCUTS ] ---
cd ..        // Volver atrás    |  mkdir      // Crear carpeta
ls -la       // Ver archivos    |  clear      // Limpiar consola
code .       // Abrir VS Code   |  touch      // Crear archivo

bruns@BrunoMatrix MINGW64 ~
$ # --- IDENTIDAD CONFIGURADA ---
$ git config --global user.name "brunorios21"
$ git config --global user.email "brunorioscorp@gmail.com"

bruns@BrunoMatrix MINGW64 ~/proyectos
$ # --- INICIAR PROYECTO NUEVO ---
$ git init                          # Crear repo local
$ git remote add origin <url>       # Conectar a GitHub

bruns@BrunoMatrix MINGW64 ~/trabajando
$ # --- CICLO DIARIO (EL COMBO) ---
$ git add .                         # Preparar cambios
$ git commit -m "update: fixes"     # Firmar avance
$ git push origin main              # ¡A la nube!

bruns@BrunoMatrix MINGW64 ~
$ git config --list                 # Verificar todo

# Ultima actualizacion: Marzo 2026
