import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const newItem = { ...item, quantity };
    console.log('Agregado al carrito:', newItem);

    setCart(prevCart => {
      const updatedCart = [...prevCart, newItem];
      console.log("Carrito actualizado:", updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    console.log("Vaciando carrito...");
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
