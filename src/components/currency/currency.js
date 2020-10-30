import React, { useContext } from 'react';
import { currencyContext } from '../../context/currency-context';

const Currency = () => {
  const { currentCurrency, setCurrentCurrency, currencies } = useContext(
    currencyContext
  );
  return (
    <select
      defaultValue={currentCurrency.slug}
      onChange={(e) => setCurrentCurrency(currencies[e.target.value])}
    >
      {Object.values(currencies).map((currency, index) => (
        <option key={index} value={currency.slug}>
          {currency.name}
        </option>
      ))}
    </select>
  );
};

export default Currency;
