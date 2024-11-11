import { createContext, useState } from "react";

const CartContext = createContext(null);

export default function CartState({ children }) {
  const [cartItems, setCartItems] = useState([]);

  async function test() {
    console.log("test function is called"); // Debug line
    try {
      //const response = await fetch(`https://fakestoreapi.com/products/1`);
      //const data = await response.json();
      //console.log(data);
      
      const r2= await fetch(`https://www.course-api.com/react-store-single-product?id=rec1Ntk7siEEW9ha1`);
      const d2=await r2.json();
      console.log(d2);
      setCartItems(c=>[...c,d2]);
      
    } catch (e) {
      console.log(e);
    }
  }
  

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
      value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity, test}}>
      {children}
    </CartContext.Provider>
  );
}

export {CartContext}
