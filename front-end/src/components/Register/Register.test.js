import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Register from './Register';
// import { Container } from '@material-ui/core';

test('the register page renders', () => {
  const { getAllByText } = render(<Register />);
  expect(getAllByText(/sign up/i)[0]).toBeInTheDocument();
});

test('test the errors work', () => {
  const { getAllByText } = render(<Register />);
  expect(getAllByText(/sign up/i)[0]).toBeInTheDocument();
  
  // the window error was because getAllBy methods return arrays - sean 
  fireEvent.click(screen.getAllByRole('button')[0]);
  // fireEvent.click(screen.getAllByRole('button'));
  // console.log(screen.getAllByRole('button'))

  expect(getAllByText(/please enter your first name/i)[0]).toBeInTheDocument();
});

function click(txt) {
  fireEvent.click(
      screen.getByText(txt)
  );
}





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