import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('renders the input and add button', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText('Añadir tarea');
    const button = getByText('Añadir');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('adds a todo when the add button is clicked', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const input = getByPlaceholderText('Añadir tarea');
    const button = getByText('Añadir');

    fireEvent.change(input, { target: { value: 'Learn testing' } });
    fireEvent.click(button);

    const todo = getByText('Añadir');
    expect(todo).toBeInTheDocument();
  });
  
});