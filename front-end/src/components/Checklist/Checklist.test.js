import React from 'react';
import { render, screen } from '@testing-library/react';
import Checklist from './Checklist';

const { getByText } = screen;

test('renders the page', () => {
  render(<Checklist />);

  expect(getByText(/screening checklist/i)).toBeInTheDocument();
  expect(getByText(/following symptoms:/i)).toBeInTheDocument();
  expect(getByText(/fever/i)).toBeInTheDocument();
});
