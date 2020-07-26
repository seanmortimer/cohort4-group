import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the page', () => {
  const { getByText } = render(<App />);
  const copyright = getByText(/copyright/i);
  expect(copyright).toBeInTheDocument();
});