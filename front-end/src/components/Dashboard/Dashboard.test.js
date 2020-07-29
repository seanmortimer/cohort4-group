import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Dashboard from './Dashboard';

const { getByText, getAllByText, getByRole, getAllByRole } = screen;

test('the dashboard renders', () => {
  render(<Dashboard />);

  expect(getAllByText(/Teamwork makes/i)[0]).toBeInTheDocument();
  expect(getAllByRole('textbox')).toHaveLength(2);
});

// Need to set up test to await stuff
test('sign in > click through checklist > sign in', async () => {
  render(<Dashboard />);

  const [email, pass] = getAllByRole('textbox');
  const login = getAllByRole('button', { name: /login/i })[1];
  fireEvent.change(email, { target: { value: 'sean@sean.ca' } });
  fireEvent.change(pass, { target: { value: 'ssssaaaa' } });
  fireEvent.click(login);

  await waitFor(() => getByText(/symptom/i));
  expect(getByText(/symptom/i)).toBeInTheDocument();
  expect(getByText(/chills/i)).toBeInTheDocument();

});
