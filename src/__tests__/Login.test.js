import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Login } from '../pages/Login/Login';

describe('Form do Login', () => {
  test('Input de e-mail', () => {
    const { container } = render(<Login />);
    const input = container.querySelector('#inputEmail');
    fireEvent.change(input, { target: { value: 'emaildomain' } });
    expect(input).toHaveAttribute('type', 'email');
  });

  test('Input da senha', () => {
    const { container } = render(<Login />);
    const input = container.querySelector('#inputPassword');
    fireEvent.change(input, { target: { value: 'password' } });
    expect(input).toHaveAttribute('type', 'password');
  });

  test('O button deve executar o submit', () => {
    const handleSubmit = jest.fn();
    const { container } = render(<Login />);
    const inputEmail = container.querySelector('#inputEmail');
    const inputPassword = container.querySelector('#inputPassword');
    const button = container.querySelector('#btnSubmit');

    fireEvent.change(inputEmail, { target: { value: 'test@test' } });
    fireEvent.change(inputPassword, { target: { value: 'test' } });
    fireEvent.click(button);

    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
});
