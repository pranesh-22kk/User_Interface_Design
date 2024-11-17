// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import List from './components/List';
import ProductDetail from './components/ProductDetail'; // Import ProductDetail component
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/products" element={<List />} />
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Dynamic route for product details */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
