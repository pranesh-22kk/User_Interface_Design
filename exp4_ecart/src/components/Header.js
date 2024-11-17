// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Header.css';  // Import Header-specific CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo">My E-Commerce</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
