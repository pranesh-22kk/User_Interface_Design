// src/components/Content.js

import React from 'react';
import './Content.css';  // Import Content-specific CSS

const Content = () => {
  return (
    <section className="content">
      <h1>Welcome to Our E-Commerce Store!</h1>
      <p>Browse through a variety of products tailored just for you!</p>
      <img
        className="hero-image"
        src="ecart1.png"  // Use relative path from public folder
        alt="Featured Products"
      />
    </section>
  );
};

export default Content;
