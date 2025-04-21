import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.id === item.id);

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > item.stock) {
          alert(`No hay suficiente stock para "${item.title}".`);
          return prevCart;
        }

        return prevCart.map(i =>
          i.id === item.id ? { ...i, quantity: newQuantity } : i
        );
      } else {
        if (quantity > item.stock) {
          alert(`No hay suficiente stock para "${item.title}".`);
          return prevCart;
        }
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? item.quantity < item.stock
            ? { ...item, quantity: item.quantity + 1 }
            : item
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
