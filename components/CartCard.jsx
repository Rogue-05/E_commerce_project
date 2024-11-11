import { useContext } from "react";
import { CartContext } from "../pages/CartContext";

export default function CartCard(props) {
  const { items } = props;
  const {removeFromCart}=useContext(CartContext)
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={items?.images[0]?.url} alt={items.title} />
      </div>
      <div className="outer-container">
      <div className="text-cart-container">
        <h3>{items.name}</h3>
        <p>Company : {items.company}</p>
        <p>Price: ${items.price}</p>
      </div>
      <div className="button-container">
        <button className="remove-button"
          onClick={()=>{removeFromCart(items.id)}}>Delete</button>
        <button className="decrement-button">-</button>
        <input
          type="number"
          value="1"
          min="1"
          readOnly
        />
        <button className="increment-button">+</button>
      </div>
    </div>
    </div>
      
  );
}

