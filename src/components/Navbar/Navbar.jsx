import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-4"  style={{ backgroundColor: '#d4d4d4' }}>
      <Link className="navbar-brand" to="/">Rogelio Motors</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/category/deportivo">Deportivos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/suv">SUV</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/pickup">Pickup</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/auto">Autos</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  )
}

export default Navbar
