# Clase 01: Primeros pasos con ReactJS + Vite

Este proyecto representa la entrega obligatoria de la Clase 01, donde se aplican los conceptos fundamentales de **Descomposición Modular** y **Arquitectura de Componentes** utilizando React y Vite como herramienta de construcción (build tool).

## Objetivo del Proyecto
El sistema tiene como propósito demostrar la capacidad de orquestar múltiples archivos `.jsx` dentro de un componente raíz (`App.jsx`), manteniendo una estructura limpia y siguiendo el principio de **Responsabilidad Única (SRP)**.

##  Tecnologías Utilizadas
* **React 18**: Biblioteca de JavaScript para construir interfaces de usuario.
* **Vite 6**: Next Generation Frontend Tooling para un desarrollo ágil (HMR).
* **JavaScript (ES6+)**: Uso de exportaciones nombradas e importaciones modulares.

## Estructura de Componentes
El software se divide en cuatro módulos principales:

1. **App.jsx (Componente Padre):** Funciona como el orquestador principal del DOM Virtual.
2. **Encabezado.jsx (Hijo):** Renderiza el título y la identidad visual superior.
3. **CuerpoPosteo.jsx (Hijo):** Módulo encargado de gestionar el contenido dinámico/informativo.
4. **PieDePosteo.jsx (Hijo):** Encapsula la información de cierre, créditos y metadatos temporales.

##  Instalación y Ejecución
Para replicar este entorno de desarrollo localmente, siga estos pasos:

1. **Clonar el repositorio o descargar los archivos.**
2. **Instalar dependencias:**
   ```bash
   npm install

## Análisis de Ingeniería y Arquitectura de Sistemas

Como futuro Analista de Sistemas, el desarrollo de este proyecto no se limita a la codificación, sino a la implementación de patrones de diseño de software robustos. A continuación, se detalla el análisis técnico de la solución:

### . Descomposición Funcional y Modularización
El sistema aplica una **Estrategia de Descomposición Top-Down**. Se ha fragmentado la interfaz de usuario (UI) en módulos independientes (Encabezado, Cuerpo, Pie) que presentan:
* **Alta Cohesión:** Cada componente tiene una única responsabilidad funcional (SRP - Single Responsibility Principle).
* **Bajo Acoplamiento:** Los componentes hijos son agnósticos entre sí; no dependen de la existencia o estado del otro para renderizarse, lo que facilita el mantenimiento preventivo y correctivo.

### . Paradigma de Programación Declarativa
A diferencia del modelo imperativo (manipulación directa del DOM), React utiliza un enfoque **Declarativo**. Como analistas, definimos el "Qué" (el estado final de la UI) y delegamos el "Cómo" (la actualización de los nodos del navegador) a la librería. Esto reduce la probabilidad de errores de desincronización en sistemas de gran escala.

### . Eficiencia y Optimización (Virtual DOM vs Real DOM)
Desde la perspectiva del rendimiento del sistema:
* **Algoritmo de Reconciliación:** React mantiene una representación en memoria de la UI (Virtual DOM). Al realizar cambios, calcula la diferencia mínima necesaria (Diffing Algorithm) antes de actualizar el DOM real.
* **Complejidad Computacional:** Este proceso optimiza los recursos de CPU y memoria del cliente, permitiendo que la aplicación escale sin degradar la experiencia del usuario final.

### . Ciclo de Vida y Flujo de Control
El flujo de control se gestiona mediante el componente raíz `App.jsx`, que actúa como el **Main Entry Point** del sistema. 
* **Renderizado Unidireccional:** El flujo de datos (aunque en este nivel inicial es estático) está preparado para seguir un modelo de cascada, asegurando la trazabilidad de la información y evitando condiciones de carrera (race conditions) en la gestión de datos.

### . Análisis del Entorno de Construcción (Vite Build Tool)
Se optó por **Vite** debido a su arquitectura basada en **Native ES Modules (ESM)**:
* **Pre-bundling:** Utiliza `esbuild` para dependencias, mejorando la velocidad de inicio del servidor en un 100x comparado con herramientas tradicionales como Webpack.
* **HMR (Hot Module Replacement):** Permite actualizaciones de módulos en tiempo real sin perder el estado del sistema, optimizando los tiempos de desarrollo (Time-to-Market).

---
> **Conclusión del Analista:** La arquitectura propuesta garantiza un software **Escalable, Mantenible y Testeable**, cumpliendo con los estándares modernos de ingeniería de software para aplicaciones distribuidas en la web.