import React from 'react';
import ProductCard from '../components/ProductCard'; // Correctly import the component

export default function ProductsPage({ products, addToCart }) {
  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="product-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
}
