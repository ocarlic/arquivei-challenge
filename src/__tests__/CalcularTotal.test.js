import { CalcularTotal } from '../service/CalcularTotal';

test('A CalcularTotal deve ser uma funcao', () => {
  expect(CalcularTotal).toBe(CalcularTotal);
});

test('Se chamar CalcularTotal() sem passar parametro deve retornar undefined', () => {
  expect(CalcularTotal()).toBeUndefined();
});

test('A função CalcularTotal() deve ser uma funcao', () => {
  expect(typeof CalcularTotal(1)).toEqual('string');
});

test('CalcularTotal(2) deve retornar 0,18', () => {
  expect(CalcularTotal(2)).toBe('0,18');
});

test('CalcularTotal(1000) deve retornar 90,00', () => {
  expect(CalcularTotal(1000)).toBe('90,00');
});

test('CalcularTotal(1024) deve retornar 93,84', () => {
  expect(CalcularTotal(1024)).toBe('93,84');
});

test('CalcularTotal(2500) deve retornar 370,00', () => {
  expect(CalcularTotal(2500)).toBe('370,00');
});

test('CalcularTotal(10000) deve retornar 2.170,00', () => {
  expect(CalcularTotal(10000)).toBe('2.170,00');
});
