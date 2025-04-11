import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <button className="btn btn-outline-light" onClick={handleClick}>
      🛒 <span className="badge bg-secondary">{totalItems}</span>
    </button>
  );
};

export default CartWidget;
