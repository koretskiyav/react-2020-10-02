import React, { useContext } from 'react';
import { CurrencyConsumer } from '../../context/currency-context';

const Price = ({ price }) => {
  return (
    <CurrencyConsumer>
      {({ currency }) => {
        return `${(price * currency.rate).toFixed(2)} ${currency.icon}`;
      }}
    </CurrencyConsumer>
  );
};

export default Price;
