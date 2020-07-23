import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from './Register';
import { Container } from '@material-ui/core';

test('the register page renders', () => {
  const { getAllByText } = render(<Register />);
  expect(getAllByText(/sign up/i)[0]).toBeInTheDocument();
});

test('the email', () => {
  expect(getAllByText(/sign up/i)[0]).toBeInTheDocument();
});






// test('test validation works', () => {
//   const mockSaveCallback = jest.fn();
//   const mockUserMsgCallback = jest.fn();

//   const { getAllByText } = render(<Register />);



//   expect(getAllByText(/sign up/i)[0]).toBeInTheDocument();

// });

//utility functions to save tons of code

// function getValue(name) {
//     return document.querySelector(`[name=${name}]`).value;
//   }

// function updateValue(name, value) {
//     document.querySelector(`[name=${name}]`).value = value;
//   }

// function click(txt) {
//     fireEvent.click(
//       screen.getByText(txt)
//     );
//   }