import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard'; 
import { describe, it, expect, vi } from 'vitest';

describe('ProductCard Component', () => {
  const mockProduct = { id: 1, name: 'Test Product', price: 29.99, image: 'test.jpg' };
  const mockAddToCart = vi.fn(); // Mock function to track clicks

  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText(/\$29.99/)).toBeInTheDocument();
  });

  it('calls addToCart when button is clicked', () => {
    render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);
    
    const button = screen.getByText(/Add to Cart/i);
    fireEvent.click(button);
    
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});