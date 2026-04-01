export function PieDePosteo() {
  const anioActual = new Date().getFullYear();
  
  return (
    <footer>
      <hr />
      <p>Desarrollado por Bruno | {anioActual}</p>
      <small>Proyecto Inicial - Clase 01 Vite + React</small>
    </footer>
  );
}