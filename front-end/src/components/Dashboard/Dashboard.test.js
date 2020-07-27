import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

const { getByText, getAllByText, getByRole, getAllByRole } = screen;

test('the register page renders', () => {
  render(<Dashboard />);

  expect(getAllByText(/Teamwork makes/i)[0]).toBeInTheDocument();
//   expect(getAllByRole('textbox')).toHaveLength(2);
  // expect(getByText(/password/i)).toBeInTheDocument();
});

// test('submit blank form', () => {
//   render(<Login />);
//   fireEvent.click(getByRole('button'));
// });


