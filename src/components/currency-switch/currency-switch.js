import React, { useContext } from 'react';

import styles from './currency-switch.module.css';
import { currencyContext } from '../../context/currency-context';

const Header = () => {
  const { currencies, currency, setCurrency } = useContext(currencyContext);
  const currencyIds = Object.keys(currencies);
  const index = currencyIds.indexOf(currency);
  const nextIndex = index + 1 === currencyIds.length ? 0 : index + 1;

  return (
    <h2
      className={styles.switch}
      onClick={() => setCurrency(currencyIds[nextIndex])}
    >
      {currency.toUpperCase()}
    </h2>
  );
};

export default Header;
