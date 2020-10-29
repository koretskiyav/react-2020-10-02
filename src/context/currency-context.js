import { createContext } from 'react';
export const currencies = {
  uah: {
    name: 'UAH',
    slug: 'uah',
    rate: 27.4,
    symbol: '₴',
  },
  usd: {
    name: 'USD',
    slug: 'usd',
    rate: 1,
    symbol: '$',
  },
  eur: {
    name: 'EUR',
    slug: 'eur',
    rate: 0.85056,
    symbol: '€',
  },
  cad: {
    name: 'CAD',
    slug: 'cad',
    rate: 1.32555,
    symbol: '$',
  },
};
export const currencyContext = createContext(currencies);

export const CurrencyConsumer = currencyContext.Consumer;
export const CurrencyProvider = currencyContext.Provider;
