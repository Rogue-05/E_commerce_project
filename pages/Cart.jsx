import { useContext, useEffect } from "react";
import { CartContext } from './CartContext'; // Named import
import CartCard from "../components/CartCard";

export default function Cart() {
  const { cartItems, test } = useContext(CartContext);

  useEffect(() => {
    console.log("in cart");
    test();
  }, []);

  return (
  <div>
    <h1>Your Cart</h1>
    <div className="cart-card-container">
      {cartItems.map((item) => (
        <CartCard  items={item} />
      ))}
    </div>
  </div>
  );
}

