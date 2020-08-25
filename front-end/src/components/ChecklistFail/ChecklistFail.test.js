import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checklist from './ChecklistFail';

const { getByText, queryByText, getAllByRole } = screen;
const successMockFn = jest.fn();

test('renders the page', () => {
  render(<Checklist onSuccess={successMockFn} />);

  expect(getByText(/screening checklist/i)).toBeInTheDocument();
  expect(getByText(/following symptoms:/i)).toBeInTheDocument();
  expect(getByText(/fever/i)).toBeInTheDocument();
});

test('clicking no moves to next list', () => {
  render(<Checklist onSuccess={successMockFn} />);

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
  expect(successMockFn).not.toHaveBeenCalled();
  fireEvent.click(no);
  expect(successMockFn).toHaveBeenCalled();
});
