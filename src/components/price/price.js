import React from 'react';
import PropTypes from 'prop-types';

import { CurrencyConsumer } from '../../context/currency-context';

const Price = ({ amount }) => {
  return (
    <CurrencyConsumer>
      {({ getCurrency }) => {
        const currency = getCurrency();

        if (!currency) {
          return amount;
        }

        const price = (amount * currency.rate).toFixed(2);
        return `${price} ${currency.id.toUpperCase()}`;
      }}
    </CurrencyConsumer>
  );
};

Price.propTypes = {
  amount: PropTypes.number,
};

export default Price;
