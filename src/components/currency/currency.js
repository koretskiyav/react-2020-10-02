import React, { useContext } from 'react';
import styles from './currency.module.css';
import { currencies } from '../../fixtures';
import { currencyContext } from '../../context/currency-context';

const Currency = () => {
  const { currency, setCurrency } = useContext(currencyContext);
  const handleChange = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <div className={styles.currency}>
      <select onChange={handleChange} defaultValue={currency}>
        {Object.values(currencies).map((cur) => {
          return (
            <option value={cur.code} key={cur.code}>
              {cur.sign}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Currency;
