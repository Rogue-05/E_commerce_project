import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx"; 

function ProductCard(props) {
  const { items } = props;
  const navigate = useNavigate();
  const {addToCart}=useContext(CartContext)

  const handleCardClick = () => {
    navigate(`/shop-item/${items._id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click from triggering
    // Add your cart logic here
    console.log('Adding to cart:', items.title);
    addToCart(items)
  };

  return (
    <div className="Card" onClick={handleCardClick}>
      <img src={items.image} alt={items.title} />
      <div>
        <h2>{items.title}</h2>
        <p className="price">${items.price}</p>
        <div className="info">
          <p className="rating">
            ⭐ {items.rating.rate} ({items.rating.count} reviews)
          </p>
        </div>
        <button onClick={handleAddToCart}>Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;