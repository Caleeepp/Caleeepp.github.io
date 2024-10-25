import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Altos Hornos y Hornos Convertidores/i);
  expect(linkElement).toBeInTheDocument();
});
