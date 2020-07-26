import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import { Container } from '@material-ui/core';
import UserPage from './UserPage';

const { getByText, getAllByText, getByRole, getAllByRole } = screen;

test('Test the UserPage profile', () => {
    render(<UserPage />);

    expect(getAllByText(/sign out/i)[0]).toBeInTheDocument();
    // expect(getAllByRole('textbox')).toHaveLength(2);
    // expect(getByText(/password/i)).toBeInTheDocument();
});

// test('submit blank form', () => {
//   render(<Login />);
//   fireEvent.click(getByRole('button'));
// });

