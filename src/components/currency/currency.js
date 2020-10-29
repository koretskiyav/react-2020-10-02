import React, { useContext } from 'react';
import { CurrencyContext } from '../../context/currency-context';

function Currency() {
  const [currencyState, setCurrencyState] = useContext(CurrencyContext);
  const onChangeHandler = (e) =>
    setCurrencyState({ ...currencyState, currency: e.target.value });

  return (
    <div>
      <select onChange={onChangeHandler}>
        <option value="USD">USD</option>
        <option value="RUB">RUB</option>
        <option value="UAH">UAH</option>
      </select>
    </div>
  );
}

export default Currency;
