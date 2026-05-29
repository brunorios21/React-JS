import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          📚 Clase 10 - CRUD
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/productos-nacionales" className="nav-link">Productos</Link>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link">Admin ▼</span>
            <div className="dropdown-menu">
              <Link to="/admin/productos" className="dropdown-link">Gestionar Productos</Link>
              <Link to="/admin/cupones" className="dropdown-link">Gestionar Cupones</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
