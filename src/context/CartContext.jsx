import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);

      // Increase quantity if already in cart
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }

      // Add new item
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, decreaseQty, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
