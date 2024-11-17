// src/components/Footer.js

import React from 'react';
import './Footer.css';  // Import Footer-specific CSS

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 My E-Commerce. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
