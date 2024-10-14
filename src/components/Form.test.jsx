import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form'; // Adjust the import path if necessary

describe('Form component', () => {
  let addMock;

  beforeEach(() => {
    addMock = jest.fn(); // Create a mock function for the add prop
    render(<Form add={addMock} />);
  });

  test('renders the form', () => {
    expect(screen.getByPlaceholderText('Write some notes...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('calls add function with note when form is submitted', () => {
    const input = screen.getByPlaceholderText('Write some notes...');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'Test note' } });
    fireEvent.click(button);

    expect(addMock).toHaveBeenCalledTimes(1);
    expect(addMock).toHaveBeenCalledWith(expect.objectContaining({
      note: 'Test note',
    }));
  });

  test('shows alert when submitting an empty note', () => {
    const button = screen.getByRole('button');

    window.alert = jest.fn(); // Mock the alert function

    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith('Please add a note');
    expect(addMock).not.toHaveBeenCalled(); // Ensure add is not called
  });
});
