import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/checkout">Checkout</Link>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
