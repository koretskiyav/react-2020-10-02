import { createContext } from 'react';

export const currencyContext = createContext();

export const CurrencyConsumer = currencyContext.Consumer;
export const CurrencyProvider = currencyContext.Provider;

const exchangeRate = [1, 0.86, 79.17, 0.769];

export const returnSum = (value, currency) => {
  switch (currency) {
    case 'USD':
      value = Math.round(value * exchangeRate[0]);
      return value + ' $';
    case 'EUR':
      value = Math.round(value * exchangeRate[1]);
      return value + ' €';
    case 'RUB':
      value = Math.round(value * exchangeRate[2]);
      return value + ' ₽';
    default:
      return value;
  }
};
