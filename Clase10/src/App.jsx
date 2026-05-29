import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProductosNacionales from './pages/ProductosNacionales';
import ProductosNacionalesDetalle from './pages/ProductosNacionalesDetalle';
import GestionProductos from './pages/GestionProductos';
import GestionCupones from './pages/GestionCupones';
import './index.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos-nacionales" element={<ProductosNacionales />} />
        <Route path="/productos-nacionales/:id" element={<ProductosNacionalesDetalle />} />
        <Route path="/admin/productos" element={<GestionProductos />} />
        <Route path="/admin/cupones" element={<GestionCupones />} />
      </Routes>
    </Router>
  );
}

export default App;
