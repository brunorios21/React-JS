export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>📚 Bienvenido a Clase 10 - CRUD en ReactJS</h1>
        <p style={{ marginTop: '20px', fontSize: '16px', lineHeight: '1.6' }}>
          En esta clase aprenderemos a dominar el ciclo CRUD (Crear, Leer, Actualizar, Eliminar) 
          usando React y Firebase.
        </p>

        <div style={{ marginTop: '30px' }}>
          <h2 style={{ marginTop: '20px', marginBottom: '15px' }}>📋 Temas a Cubrir:</h2>
          <ul style={{ marginLeft: '20px', lineHeight: '2' }}>
            <li><strong>Read (Leer):</strong> Consultar datos desde Firestore</li>
            <li><strong>Create (Crear):</strong> Agregar nuevos documentos con addDoc()</li>
            <li><strong>Update (Actualizar):</strong> Modificar registros existentes</li>
            <li><strong>Delete (Eliminar):</strong> Borrar documentos con deleteDoc()</li>
            <li><strong>Detalle de Productos:</strong> Acceder a productos por ID con useParams()</li>
            <li><strong>Gestión de Cupones:</strong> Sistema de descuentos con CRUD completo</li>
          </ul>
        </div>

        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#e7f3ff', borderRadius: '5px' }}>
          <h3>🎯 Objetivo Principal:</h3>
          <p>
            Convertirte en un arquitecto de datos que entienda el flujo completo entre 
            React, componentes interactivos y una base de datos real como Firebase.
          </p>
        </div>

        <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#fff3cd', borderRadius: '5px' }}>
          <h3>⚠️ Importante - Configurar Firebase:</h3>
          <p>
            Antes de usar esta aplicación, debes configurar tu proyecto de Firebase en el archivo 
            <code style={{ backgroundColor: '#f1f1f1', padding: '2px 6px', borderRadius: '3px' }}>src/firebase.config.js</code>
          </p>
        </div>

        <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '5px', textAlign: 'center' }}>
            <h4>📦 Productos</h4>
            <p>Explora y administra productos nacionales con opciones de edición y eliminación.</p>
          </div>
          <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '5px', textAlign: 'center' }}>
            <h4>🎟️ Cupones</h4>
            <p>Crea y elimina cupones de descuento para tus clientes.</p>
          </div>
          <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '5px', textAlign: 'center' }}>
            <h4>🔄 CRUD Completo</h4>
            <p>Practica todas las operaciones de base de datos de forma interactiva.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
