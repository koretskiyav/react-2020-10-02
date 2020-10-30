import React, { useContext } from 'react';
import currencyContext from '../../../src/hooks/currency-context';

const Currencies = () => {
  const { currencies, setCurrencyKey } = useContext(currencyContext);

  const onClick = (e) => setCurrencyKey(e.target.value);
  return (
    <div>
      {Object.keys(currencies).map((currencyKey) => (
        <button key={currencyKey} value={currencyKey} onClick={onClick}>
          {currencyKey}
        </button>
      ))}
    </div>
  );
};

export default Currencies;
