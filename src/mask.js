import VMasker from 'vanilla-masker';

const Mask = {
  toMoney: event => VMasker.toMoney(event, 1234567890),
  toCNPJ: event => VMasker.toPattern(event, '99.999.999/9999-99'),
  toCreditCard: event => VMasker.toPattern(event, '9999 9999 9999 9999'),
  toExpiration: event => VMasker.toPattern(event, '99/9999'),
  toCVV: event => VMasker.toPattern(event, '999'),
  toN: event => VMasker.toNumber(event, '123ac34'),
};

export { Mask };
