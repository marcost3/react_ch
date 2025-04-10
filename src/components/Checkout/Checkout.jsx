import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  return (
    <div>
      <h2>Resumen de compra</h2>
      {cart.map((item) => (
        <div key={item.id}>
          {item.title} x {item.quantity} = ${item.price * item.quantity}
        </div>
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={clearCart}>Finalizar compra</button>
    </div>
  );
};

export default Checkout;
