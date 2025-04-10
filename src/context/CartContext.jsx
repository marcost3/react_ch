import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const newItem = { ...item, quantity };
    setCart([...cart, newItem]);
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
