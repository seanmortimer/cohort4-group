import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

const { getByText, getAllByText, getByRole, getAllByRole } = screen;

test('the dashboard renders', () => {
  render(<Dashboard />);

  expect(getAllByText(/Teamwork makes/i)[0]).toBeInTheDocument();
  expect(getAllByRole('textbox')).toHaveLength(2);
});

// Need to set up test to await stuff
test.skip('sign in > click through checklist > sign in', () => {
  render(<Dashboard />);

  const [email, pass] = getAllByRole('textbox');
  const login = getAllByRole('button', { name: /login/i })[1];
  fireEvent.change(email, 'sean@sean.ca');
  fireEvent.change(pass, 'ssssaaaa');
  fireEvent.click(login);

  expect(getByText(/symptom/i)).toBeInTheDocument();
});
