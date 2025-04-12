import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';
import { db } from '../firebase/client';
import Swal from 'sweetalert2';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    dni: '',
  });

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePurchase = async () => {
    if (!buyer.name || !buyer.email || !buyer.address || !buyer.phone || !buyer.dni) {
      Swal.fire('Error', 'Completa todos los campos del formulario.', 'error');
      return;
    }

    try {
      // revisa stock
      for (const item of cart) {
        const itemRef = doc(db, 'products', item.id);
        const itemSnap = await getDoc(itemRef);

        if (!itemSnap.exists()) {
          throw new Error(`Producto ${item.title} no encontrado en la base de datos.`);
        }

        const currentStock = itemSnap.data().stock;

        if (currentStock < item.quantity) {
          Swal.fire(
            'Stock insuficiente',
            `No hay suficiente stock para "${item.title}". Quedan ${currentStock} unidades.`,
            'warning'
          );
          return;
        }
      }

      // nueva orden
      const order = {
        buyer,
        items: cart,
        date: new Date(),
        total,
      };

      const ordersCollection = collection(db, 'orders');
      const docRef = await addDoc(ordersCollection, order);

      // descuenta stock
      const stockUpdates = cart.map(async (item) => {
        const itemRef = doc(db, 'products', item.id);
        const newStock = item.stock - item.quantity;
        return updateDoc(itemRef, { stock: newStock });
      });

      await Promise.all(stockUpdates);

      // si la compra es exitosa
      Swal.fire('Compra realizada', `Tu número de orden es: ${docRef.id}`, 'success');
      clearCart();
    } catch (error) {
      console.error('Error al procesar la compra:', error);
      Swal.fire('Error', error.message || 'Ocurrió un error al procesar la compra.', 'error');
    }
  };

  if (cart.length === 0) {
    return <h3 className="text-center mt-5">El carrito está vacío.</h3>;
  }

  return (
    <div className="container mt-5">
      <h2>Resumen de compra</h2>
      <ul className="list-group mb-4">
        {cart.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.title} - Cantidad: {item.quantity} - Precio unitario: ${item.price}
          </li>
        ))}
        <li className="list-group-item fw-bold">Total: ${total}</li>
      </ul>

      <h4>Datos del comprador</h4>
      <form className="row g-3">
        <input type="text" className="form-control" placeholder="Nombre" name="name" onChange={handleChange} />
        <input type="email" className="form-control" placeholder="Email" name="email" onChange={handleChange} />
        <input type="text" className="form-control" placeholder="Dirección" name="address" onChange={handleChange} />
        <input type="text" className="form-control" placeholder="Teléfono" name="phone" onChange={handleChange} />
        <input type="text" className="form-control" placeholder="DNI" name="dni" onChange={handleChange} />
      </form>

      <button className="btn btn-success mt-4" onClick={handlePurchase}>
        Finalizar compra
      </button>
    </div>
  );
};

export default Checkout;
