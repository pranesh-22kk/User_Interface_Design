// src/components/List.js

import React, { useState } from 'react';
import './List.css';  // Import List-specific CSS

// Updated food product list
const products = [
    { id: 1, name: "Pizza", description: "Cheesy and delicious", image: "/images/pizza1.jpeg" },
    { id: 2, name: "Burger", description: "Juicy and flavorful", image: "/images/burger.jpeg" },
    { id: 3, name: "Pasta", description: "A creamy Italian classic", image: "/images/pasta.jpeg" },
    { id: 4, name: "Sushi", description: "Fresh and healthy", image: "/images/sushi.jpeg" },
    { id: 5, name: "Sandwich", description: "Spicy and tasty", image: "/images/sandwich.jpeg" },
    { id: 6, name: "Salad", description: "A fresh bowl of veggies", image: "/images/salad.jpeg" },
  ];
  

const List = () => {
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);  // State to hold the items in the cart

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]); // Add selected product to cart
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId)); // Remove item by matching id
  };

  // Handle checkout (simple log for now)
  const handleCheckout = () => {
    alert("Proceeding to checkout with the following items:\n" + cart.map(item => item.name).join(", "));
  };

  return (
    <section className="list">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Handle search input change
        className="search-bar"
      />
      <div className="product-container">
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className="cart-section">
          <h2>Your Cart</h2>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name}</span>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <button className="btn checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </section>
  );
};

export default List;
