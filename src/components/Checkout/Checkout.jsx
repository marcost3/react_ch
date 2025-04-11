import { useContext, useState } from "react";
import { db } from "../firebase/client";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart, getTotal } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: { name, email },
      items: cart,
      total: getTotal(),
      date: serverTimestamp(),
    };

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order).then((doc) => {
      setOrderId(doc.id);
      clearCart();
    });
  };

  if (orderId) {
    return (
      <div className="container mt-5">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu código de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Finalizar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
