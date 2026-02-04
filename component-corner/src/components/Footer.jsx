import React from 'react';
import './Footer.css';

function Footer({ copyright, email, address }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
        </div>
        <div className="footer-section">
          <h4>Customer Care</h4>
          <ul className="footer-links">
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;