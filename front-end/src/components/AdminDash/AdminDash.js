import React from 'react';
import { render } from '@testing-library/react';
// import AdminDash from './AdminDash';

test.skip('renders the page', () => {
  const { getByText } = render(<App />);
  const copyright = getByText(/copyright/i);
  expect(copyright).toBeInTheDocument();
});

