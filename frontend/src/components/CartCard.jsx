import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx"; 
import '../pages/Cart.css'

export default function CartCard(props) {
  const { item } = props;
  const {removeFromCart,incrementQuantity,decrementQuantity,loading}=useContext(CartContext)

  if (loading){
    return <div>Loading....</div>
  }
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="outer-container">
      <div className="text-cart-container">
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
      </div>
      <div className="button-container">
        <button className="remove-button"
          onClick={()=>{removeFromCart(item.id)}}>Delete</button>
        <button className="decrement-button" onClick={()=>{incrementQuantity(item.id)}}>+</button>
        <input
          type="number"
          value={item.quantity}
          readOnly
        />
        <button className="increment-button"  onClick={()=>{decrementQuantity(item.id)}}>-</button>
      </div>
    </div>
    </div>
      
  );
}

