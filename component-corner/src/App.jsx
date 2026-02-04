import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('shoppingCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const products = [
    {
      id: 1,
      name: "Smith Corona Galaxie II",
      price: 250,
      description: "A classic manual typewriter known for its reliability",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRzDPpIjS0B7_QyVIz4d0MsfMHB9Tkprb11_jRtukQmw5RT1_BXxb2A20wrA9CMCh59wyh9cCRYSF_z2divljNLbnpRFbbz"
    },
    {
      id: 2,
      name: "1984 Apple Macintosh",
      price: 2000,
      description: "The original Macintosh. A true collector's piece",
      image: "https://i.ebayimg.com/images/g/46oAAOSwSA5ePBGY/s-l640.jpg"
    },
    {
      id: 3,
      name: "Nikon FG",
      price: 350,
      description: "A compact and lightweight 35mm SLR camera",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQTPv0svocJGWrib5E5E3kSmX2w-tUnSasgpAb9417O3XvjZmqjzYJvm980R5OiMnhGgO_ZobLlLBz405wVWZMipiz8YzIaY3V1LluMDvpEkX6lyeofL54e9g"
    },
    {
      id: 4,
      name: "Nintendo Game Boy",
      price: 90,
      description: "The original dot-matrix handheld console",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1SMjhq2pK-GIKxYWnMMQwLr4tk28uJNBRzbnwJX_bLNRh9XSj3zmo8qogI50YLgEgFwWRT8PhfwnmJoJ9EiCMmIoVzlvkpu0Yp5CSgGQK"
    },
    {
      id: 5,
      name: "Sony Walkman",
      price: 500,
      description: "The first portable cassette player. Listen to your mix tapes",
      image: "data:image/jpeg;base64,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"
    },
    {
      id: 6,
      name: "Western Electric 500",
      price: 120,
      description: "The classic rotary dial phone that would befound in every home in its time",
      image: "data:image/jpeg;base64,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"
    }
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header storeName="ComponentCorner" cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/products" 
            element={<ProductsPage products={products} addToCart={handleAddToCart} />} 
          />
          <Route 
            path="/cart" 
            element={<CartPage cart={cart} removeFromCart={handleRemoveFromCart} />} 
          />
          <Route 
            path="/product/:id" 
            element={<ProductDetailsPage products={products} addToCart={handleAddToCart} />} 
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;