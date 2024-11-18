import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import "./Shop.css";

function Products() {
  const [productItems, setProductItems] = useState([]);
  const [loading,setLoading]=useState(false);

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5555/api/products/");
      setProductItems(res.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Failed to fetch products. Please try again later.");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  if (loading){
    return <h1>Loading</h1>
  }

  return (
    <div className="products">
      {productItems.map((item) => (
        <ProductCard key={item._id} items={item} />
      ))}
    </div>
  );
}

export default Products;
