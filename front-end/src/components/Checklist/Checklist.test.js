import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checklist from './Checklist';

const { getByText, queryByText, getAllByRole } = screen;

test('renders the page', () => {
  render(<Checklist />);

  expect(getByText(/screening checklist/i)).toBeInTheDocument();
  expect(getByText(/following symptoms:/i)).toBeInTheDocument();
  expect(getByText(/fever/i)).toBeInTheDocument();
});

test('clicking no moves to next list', () => {
  render(<Checklist />);

  expect(getByText(/fever/i)).toBeInTheDocument();
  const no = getAllByRole('button')[1];
  fireEvent.click(no);

  expect(queryByText(/fever/i)).toBeNull();
  expect(getByText(/feeling unwell/i)).toBeInTheDocument();
  fireEvent.click(no);

  expect(queryByText(/feeling unwell/i)).toBeNull();
  expect(getByText(/Have you travelled outside of Canada/i)).toBeInTheDocument();

  fireEvent.click(no);
  expect(queryByText(/Have you travelled outside of Canada/i)).toBeNull();
  expect(queryByText(/with someone who is ill/i)).toBeInTheDocument();

  fireEvent.click(no);
  fireEvent.click(no);
  expect(queryByText(/being investigated or confirmed/i)).toBeInTheDocument();
  
  fireEvent.click(no);
  expect(getByText(/Congratulations!/i)).toBeInTheDocument();  
});
