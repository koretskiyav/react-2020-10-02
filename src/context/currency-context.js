import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext({});

const initialValues = {
  currency: 'USD',
  currencies: {
    USD: {
      rate: 1,
      sign: '$',
    },
    RUB: {
      rate: 79.059772,
      sign: '₽',
    },
    UAH: {
      rate: 28.0918,
      sign: '₴',
    },
  },
};

export const CurrencyProvider = (props) => {
  const [currencyState, setCurrencyState] = useState(initialValues);

  return (
    <CurrencyContext.Provider value={[currencyState, setCurrencyState]}>
      {props.children}
    </CurrencyContext.Provider>
  );
};

export const CurrencyConsumer = CurrencyContext.Consumer;
