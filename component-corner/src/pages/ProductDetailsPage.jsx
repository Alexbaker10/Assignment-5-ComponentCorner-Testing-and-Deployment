import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Product not found</div>;
  }

  return (
    <div className="product-details-page" style={{ padding: '2rem' }}>
      <div className="product-details-container" style={{ display: 'flex', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        <div className="product-image-section" style={{ flex: 1 }}>
            <img 
                src={product.image} 
                alt={product.name} 
                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} 
            />
        </div>
        <div className="product-info-section" style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{product.name}</h2>
            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>${product.price.toFixed(2)}</p>
            <p style={{ lineHeight: '1.6', marginBottom: '2rem' }}>{product.description}</p>
            <button 
                onClick={() => addToCart(product)}
                style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    fontSize: '1rem',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Add to Cart
            </button>
        </div>
      </div>
    </div>
  );
}