import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper blue darken-3">
        <Link to="/" className="brand-logo left">E-Commerce Autos</Link>
        <ul className="right">
          <li><Link to="/category/sedan">Sedanes</Link></li>
          <li><Link to="/category/suv">SUV</Link></li>
          <li><Link to="/category/camioneta">Camionetas</Link></li>
          <li><CartWidget /></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
