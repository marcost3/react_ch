import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return <div>🛒 {quantity}</div>;
};

export default CartWidget;
