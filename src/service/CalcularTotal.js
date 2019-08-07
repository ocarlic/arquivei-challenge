import { Mask } from '../mask';

const CalcularTotal = (value) => {
  const valuePromo1 = 1000;
  const valuePromo2 = 2000;
  let Promo2;
  let normalValue;

  if (value < 1001) {
    return Mask.toMoney((value * 0.09).toFixed(2));
  }

  if (value > 1000 && value < 2000) {
    Promo2 = (+value - valuePromo1) * 0.16;
    return Mask.toMoney((Promo2 + 90).toFixed(2));
  }

  if (value >= 2000) {
    normalValue = (+value - valuePromo2) * 0.24;
    return Mask.toMoney((normalValue + 250).toFixed(2));
  }

  return value;
};

export { CalcularTotal };
