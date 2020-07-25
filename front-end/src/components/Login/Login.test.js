import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import { Container } from '@material-ui/core';
import Login from './Login';

const { getByText, getAllByText, getByRole, getAllByRole } = screen;

test('the register page renders', () => {
  render(<Login />);

  expect(getAllByText(/login/i)[0]).toBeInTheDocument();
  expect(getAllByRole('textbox')).toHaveLength(2);
  // expect(getByText(/password/i)).toBeInTheDocument();
});

// test('submit blank form', () => {
//   render(<Login />);
//   fireEvent.click(getByRole('button'));
// });

