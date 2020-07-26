import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChecklistSuccess from './ChecklistSuccess';

const { getByText, queryByText, getAllByRole } = screen;

test('renders the page', () => {
  render(<ChecklistSuccess />);

  expect(getByText(/congratulations/i)).toBeInTheDocument();
});
