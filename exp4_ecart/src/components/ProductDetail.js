// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const products = [
  { id: 1, name: "Product 1", description: "Description for product 1", price: "$10", image: "https://via.placeholder.com/300" },
  { id: 2, name: "Product 2", description: "Description for product 2", price: "$20", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Product 3", description: "Description for product 3", price: "$30", image: "https://via.placeholder.com/300" },
];

const ProductDetail = () => {
  const { id } = useParams(); // Get the product id from the URL
  const product = products.find(p => p.id === parseInt(id)); // Find the product by id
  
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>{product.price}</h3>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
