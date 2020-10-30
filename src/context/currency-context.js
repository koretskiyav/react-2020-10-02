import { createContext } from 'react';

export const initialCurrency = 'rub';

export const currencies = {
  rub: {
    id: 'rub',
    rate: 1,
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