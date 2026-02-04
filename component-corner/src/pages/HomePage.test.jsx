import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';
import { describe, it, expect } from 'vitest';

describe('HomePage Component', () => {
  it('renders without crashing', () => {
    render(<HomePage />);
  });

  it('displays main content text', () => {
    render(<HomePage />);
    const heading = screen.getByRole('heading', { level: 1 }); 
    expect(heading).toBeInTheDocument();
  });
});