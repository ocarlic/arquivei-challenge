import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FormCompra } from '../pages/ComprarConsultas/components/FormCompra';

describe('Form de quantidade de consultas', () => {
  test('Input de quantidade', () => {
    const { getByLabelText } = render(<FormCompra />);
    const input = getByLabelText(/Quantidade/i);
    fireEvent.change(input, { target: { value: '2500' } });
    expect(input).toHaveAttribute('type', 'text');
  });

  test('Input do CNPJ', () => {
    const { getByLabelText } = render(<FormCompra />);
    const input = getByLabelText(/CNPJ/i);
    fireEvent.change(input, { target: { value: '00.000.000/0000-00' } });
    expect(input).toHaveAttribute('type', 'text');
  });
});

describe('Form de Pagamento', () => {
  test('Input do nome do cartão', () => {
    const { getByLabelText } = render(<FormCompra />);
    const input = getByLabelText(/Nome do cartão/i);
    fireEvent.change(input, { target: { value: 'Nome do usuário' } });
    expect(input).toHaveAttribute('type', 'text');
  });

  test('Input do número do cartão', () => {
    const { getByLabelText } = render(<FormCompra />);
    const input = getByLabelText(/Número do cartão/i);
    fireEvent.change(input, { target: { value: '0000 0000 0000 0000' } });
    expect(input).toHaveAttribute('type', 'text');
  });

  test('Input da validade do cartão', () => {
    const { getByLabelText } = render(<FormCompra />);
    const input = getByLabelText(/Data de validade/i);
    fireEvent.change(input, { target: { value: '10/2020' } });
    expect(input).toHaveAttribute('type', 'text');
  });

  test('Input do CVV', () => {
    const { getByLabelText } = render(<FormCompra />);
    const input = getByLabelText(/CVV/i);
    fireEvent.change(input, { target: { value: '000' } });
    expect(input).toHaveAttribute('type', 'text');
  });

  test('testando submit', () => {
    const handleFormSubmit = jest.fn();
    const { getByTestId } = render(<FormCompra handleFormSubmit={handleFormSubmit} />);
    fireEvent.submit(getByTestId('form'));
    expect(handleFormSubmit).toHaveBeenCalled();
  });
});
