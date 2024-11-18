import React, { useContext, useEffect, useState } from "react";
import styles from './ProductDetail.module.css'; // Import CSS module
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";

function ProdDesc() {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    function handleAddToCart() {
        console.log("Adding " + item.title + " to cart");
        addToCart(item);
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:5555/api/products/${id}`);

                if (response.data.message) {
                    // Handle case where product doesn't exist
                    setError(response.data.message);
                } else {
                    setItem(response.data);
                }
            } catch (err) {
                setError(err.message || 'An error occurred while fetching the product');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    if (!item) {
        return <div className={styles.error}>Product not found</div>;
    }

    return (
        <div className={styles.prodDesc}>
            <div className={styles.productContainer}>
                <div className={styles.imageContainer}>
                    <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.details}>
                    <h2>{item.title}</h2>
                    <p className={styles.description}>{item.description}</p>
                    <div className={styles.priceRating}>
                        <p className={styles.price}>${item.price}</p>
                        <p className={styles.rating}>
                            ⭐ {item.rating.rate} ({item.rating.count} reviews)
                        </p>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.addCart} onClick={handleAddToCart}>Add To Cart</button>
                        <button className={styles.review}>Leave A Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProdDesc;
