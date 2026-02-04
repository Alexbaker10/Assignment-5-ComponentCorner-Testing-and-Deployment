import React from 'react';
import './CartItem.css';

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <span className="cart-item-name">{item.name}</span>
        <span className="cart-item-price">${item.price.toFixed(2)}</span>
      </div>
      <button 
        className="remove-btn" 
        onClick={() => onRemove(item)}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;