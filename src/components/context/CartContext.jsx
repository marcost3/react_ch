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
  

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
