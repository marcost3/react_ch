import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // asegurate que el path es correcto

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Calcular el total de items en el carrito
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <button className="btn btn-outline-light">
      🛒 <span className="badge bg-secondary">{totalQuantity}</span>
    </button>
  );
};

export default CartWidget;
