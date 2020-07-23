import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from './Register';

test('the register page renders', () => {
  const { getAllByText } = render(<Register />);

  expect(getAllByText(/sign up/i)[0]).toBeInTheDocument();
});
