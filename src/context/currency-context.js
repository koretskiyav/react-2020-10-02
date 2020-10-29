import { createContext } from 'react';

export const currencies = {
  usd: {
    code: 'usd',
    rate: 1,
    icon: '$',
  },
  rub: {
    code: 'rub',
    rate: 79,
    icon: '₽',
  },
  eur: {
    code: 'eur',
    rate: 0.9,
    icon: '€',
  },
};

export const currencyContext = createContext(currencies);

export const CurrencyConsumer = currencyContext.Consumer;
export const CurrencyProvider = currencyContext.Provider;
