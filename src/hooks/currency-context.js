import React, { createContext, useState } from 'react';

const currencyContext = createContext();

export const currencies = {
  RUB: 78.9,
  UAH: 28.4,
  USD: 1,
  EUR: 0.86,
};

export const CurrencyProvider = ({ children }) => {
  const [currencyKey, setCurrencyKey] = useState('USD');
  const currency = (value) =>
    `${(currencies[currencyKey] * value).toFixed(2)} ${currencyKey}`;

  return (
    <currencyContext.Provider
      value={{ currencies, currencyKey, setCurrencyKey, currency }}
    >
      {children}
    </currencyContext.Provider>
  );
};

export default currencyContext;
