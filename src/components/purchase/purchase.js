import React from 'react';
import PropTypes from 'prop-types';

import { CurrencyConsumer } from '../../context/currency-context';

const purChase = ({ amount }) => {
  return (
    <CurrencyConsumer>
      {({ getCurrency }) => {
        const currency = getCurrency();

        if (!currency) {
          return amount;
        }

        const sum = (amount * currency.rate).toFixed(2);
        return `${sum} ${currency.id.toUpperCase()}`;
      }}
    </CurrencyConsumer>
  );
};

Price.propTypes = {
  amount: PropTypes.number,
};

export default purChase;