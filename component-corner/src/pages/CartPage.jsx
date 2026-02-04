import React from 'react';
import CartItem from '../components/CartItem';

export default function CartPage({ cart, removeFromCart }) {
  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is currently empty</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <CartItem 
              key={item.id} 
              item={item} 
              removeFromCart={removeFromCart} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
