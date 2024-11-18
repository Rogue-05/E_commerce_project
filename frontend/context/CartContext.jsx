import { createContext, useState } from "react";
import axios from 'axios';
const CartContext = createContext(null);

export default function CartState({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

  const incrementQuantity = (productId) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCartItems((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          if (item.quantity === 1) {
            return null; // Remove the item if quantity is 1
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      }).filter(Boolean)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity, loading }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext }
