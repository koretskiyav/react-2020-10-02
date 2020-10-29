import React from 'react';
import PropTypes from 'prop-types';

import { CurrencyConsumer } from '../../context/currency-context';

const Price = ({ amount }) => {
  return (
    <CurrencyConsumer>
      {({ getCurrency }) => {
        const currency = getCurrency();
        return currency
          ? `${amount * currency.rate} ${currency.id.toUpperCase()}`
          : amount;
      }}
    </CurrencyConsumer>
  );
};

Price.propTypes = {
  amount: PropTypes.number,
};

export default Price;
