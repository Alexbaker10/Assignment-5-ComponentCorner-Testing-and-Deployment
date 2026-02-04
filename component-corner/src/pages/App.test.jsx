import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('App Component State', () => {
  const localStorageMock = (function () {
    let store = {};
    return {
      getItem: vi.fn((key) => store[key] || null),
      setItem: vi.fn((key, value) => {
        store[key] = value.toString();
      }),
      clear: vi.fn(() => {
        store = {};
      }),
    };
  })();

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });

  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  it('renders App without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it('loads cart from localStorage on startup', () => {
    const initialCart = JSON.stringify([{ id: 1, name: 'Saved Item', price: 10 }]);
    window.localStorage.setItem('cart', initialCart);

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(window.localStorage.getItem).toHaveBeenCalledWith('cart');
  });
});