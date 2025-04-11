import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Cars - Ecommerce</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/category/deportivos">Deportivos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/suv">SUV</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/pickup">Pickup</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  )
}

export default Navbar
