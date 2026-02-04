import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from '../CartItem'; 
import { describe, it, expect, vi } from 'vitest';

describe('CartItem Component', () => {
  const mockItem = { id: 1, name: 'Test Item', price: 10, quantity: 2 };
  const mockRemove = vi.fn();

  it('renders item details', () => {
    render(<CartItem item={mockItem} removeFromCart={mockRemove} />);
    
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
  });

  it('calls removeFromCart when remove button is clicked', () => {
    render(<CartItem item={mockItem} removeFromCart={mockRemove} />);
    
    const removeButton = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeButton);
    
    expect(mockRemove).toHaveBeenCalledTimes(1);
    expect(mockRemove).toHaveBeenCalledWith(mockItem.id);
  });
});