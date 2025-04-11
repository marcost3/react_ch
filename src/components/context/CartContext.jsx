import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const itemInCart = cart.find((prod) => prod.id === item.id);

    if (itemInCart) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + item.quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, item]);
    }
  };

  const clearCart = () => setCart([]);

  const removeItem = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const getTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeItem, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
