import React from 'react';
import { CurrencyConsumer } from '../../context/currency-context';

const Price = ({ price }) => {
  return (
    <CurrencyConsumer>
      {({ currentCurrency }) => {
        return `${Math.round(price * currentCurrency.rate)} ${
          currentCurrency.symbol
        }`;
      }}
    </CurrencyConsumer>
  );
};

export default Price;
