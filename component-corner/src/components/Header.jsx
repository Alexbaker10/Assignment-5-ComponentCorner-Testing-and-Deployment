import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">{storeName}</Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Shop</Link>
          <Link to="#" className="nav-link">About</Link>
          <Link to="#" className="nav-link">Contact</Link>
          
          <div className="cart-container">
            <Link to="/cart" className="cart-link">
              <span className="cart-icon">🛒</span>
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;