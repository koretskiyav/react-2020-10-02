import { createContext } from 'react';

export const getNextCurrency = (currentCurrency) => {
  const len = Object.values(currencyList).length;
  const temp = Object.values(currencyList).find(
    (i) => i.key === currentCurrency.key + 1
  );
  if (temp) {
    return temp;
  } else {
    return Object.values(currencyList).find((i) => i.key === 1);
  }
};

export const convert = (amount, sign, ratio) => {
  return ratio * amount + ' ' + sign;
};

const currencyList = {
  1: {
    sign: '$',
    convert: convert,
    ratio: 1,
    key: 1,
    nextCurrency: getNextCurrency,
  },
  2: {
    sign: '€',
    convert: convert,
    ratio: 0.86,
    key: 2,
    nextCurrency: getNextCurrency,
  },
  3: {
    sign: '₽',
    convert: convert,
    ratio: 78,
    key: 3,
    nextCurrency: getNextCurrency,
  },
};

export const currencyContext = createContext({
  currency: {
    sign: '$',
    convert: convert,
    ratio: 1,
    key: 1,
    nextCurrency: getNextCurrency,
  },
});

export const CurrencyConsumer = currencyContext.Consumer;
export const CurrencyProvider = currencyContext.Provider;
