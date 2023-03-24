import React, { createContext, useState } from 'react';

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartItems, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter((product) => product.name !== productName));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
