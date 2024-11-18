import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext.jsx"; // Named import
import CartCard from "../components/CartCard";
import './Cart.css'

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  // Calculate totals dynamically
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const tax = (totalPrice * 0.05).toFixed(2); // 5% tax

  if (cartItems.length === 0) {
    return <h1>Your Cart is Empty</h1>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="outer-div">
        {/* Cart Items Section */}
        <div className="cart-card-container">
          {cartItems.map((item) => (
            <CartCard key={item.id} item={item} />
          ))}
        </div>

        {/* Checkout Summary Section */}
        <div className="check-out-div">
          <h3>Checkout Summary</h3>
          <div className="itemized-summary">
            <p>Total Items: <span>{totalItems}</span></p>
            <p>Total Price: <span>${totalPrice.toFixed(2)}</span></p>
          </div>
          <div className="tax">
            <p>Tax (5%): <span>${tax}</span></p>
          </div>
          <div className="estimated-total">
            <h2>Estimated Total: <span>${(parseFloat(totalPrice) + parseFloat(tax)).toFixed(2)}</span></h2>
          </div>
          <div className="promo-code">
            <input type="text" placeholder="Enter promo code" />
            <button>Apply</button>
          </div>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
