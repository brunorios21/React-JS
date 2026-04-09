# Cuestionario — Clase 3 (React)

Este archivo contiene únicamente el cuestionario con las respuestas correctas y una explicación técnica breve por cada ítem. Está pensado para usar como material de evaluación y repaso.

## Cuestionario de React: Patrones y Componentes

1. En el patrón de diseño visto, ¿qué función cumple el componente Item?
- Respuesta: **b)** Es un componente presentacional (dumb) que solo se encarga de mostrar los datos de un único producto.
- Explicación: Los componentes presentacionales no contienen lógica de negocio ni fetching; reciben datos vía props y renderizan la UI, lo que favorece la testabilidad.

2. Si tienes tres componentes Item en la pantalla, ¿por qué al modificar la cantidad de uno no se afecta la de los otros?
- Respuesta: **d)** Estado local (Local State).
- Explicación: Cada instancia mantiene su propio estado local a menos que el estado se eleve al contenedor.

3. En ItemList.jsx, ¿para qué se utiliza `.map()` sobre `productos`?
- Respuesta: **a)** Para crear un nuevo array de componentes Item, pasando a cada uno las props correspondientes.

4. ¿Qué hace la sintaxis `{...prod}` al llamar a `<Item>`?
- Respuesta: **d)** Pasa cada propiedad del objeto `prod` como props separadas al componente `Item`.

5. ¿Cuál es el propósito de dividir la aplicación en contenedores y presentacionales?
- Respuesta: **b)** Separar responsabilidades: lógica y datos por un lado; presentación por otro.

6. ¿Cómo actualizar el estado correctamente en React?
- Respuesta: **c)** Llamando a la función actualizadora proporcionada por `useState`.

7. ¿Por qué agregar `key` al renderizar listas?
- Respuesta: **b)** Para que React identifique eficientemente qué items han cambiado.

8. ¿Qué devuelve `useState`?
- Respuesta: **c)** Un array con dos elementos: el valor actual y la función para actualizarlo.

9. ¿Cómo se asocia una función a un evento click en React?
- Respuesta: **d)** `<button onClick={miFuncion}>`.

10. ¿Cuál es la responsabilidad principal de un componente contenedor como ItemListContainer?
- Respuesta: **b)** Contener la lógica de negocio y la obtención de datos para pasarlos a otros componentes.

---

### Recomendaciones y notas rápidas

- Añadir `alt` descriptivos a imágenes y revisar accesibilidad en `Nav` y botones.
- Evitar usar índices como `key` si el orden de la lista puede cambiar.
- Para producción, mover los datos de ejemplo a `src/data/productos.json` y encapsular fetching en hooks.

![Clase 3](Clase3.png)

Si quieres, puedo convertir este cuestionario en una pequeña página HTML interactiva (con estilo y anclas por pregunta) o exportarlo a PDF. Dime cuál prefieres.