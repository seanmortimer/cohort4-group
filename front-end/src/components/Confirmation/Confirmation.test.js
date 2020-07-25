import React from 'react';
import { render } from '@testing-library/react';
// import Confirmation from './Confirmation';

test.skip('renders the page', () => {
  const { getByText } = render(<Confirmation />);
  const copyright = getByText(/copyright/i);
  expect(copyright).toBeInTheDocument();
});


