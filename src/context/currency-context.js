import { createContext } from 'react';

export const initialCurrency = 'uah';

export const currencies = {
  rur: {
    id: 'rur',
    rate: 1,
  },
  byn: {
    id: 'byn',
    rate: 30,
  },
  uah: {
    id: 'uah',
    rate: 27.3,
  },
  usd: {
    id: 'usd',
    rate: 77.5,
  },
  eur: {
    id: 'eur',
    rate: 91.25,
  },
};

export const currencyContext = createContext({ currencies });

export const CurrencyConsumer = currencyContext.Consumer;
export const CurrencyProvider = currencyContext.Provider;
