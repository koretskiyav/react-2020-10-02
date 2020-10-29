import { currencies } from '../fixtures';

const inCurrency = (value, code) => {
  if (typeof value !== 'number') {
    throw new Error('value must be a number');
  }

  const { rate, sign, signPosition } = currencies[code];
  const newValue = (value * rate).toFixed(2);
  if ('before' === signPosition) {
    return sign + ' ' + newValue;
  }
  return newValue + ' ' + sign;
};

export default inCurrency;
