import React, { useContext, useState, useEffect } from 'react';
import { CurrencyContext } from '../../context/currency-context';

export default function Price({ amount }) {
  const [currencyState] = useContext(CurrencyContext);
  const [priceByCurrency, setPrice] = useState(0);
  const { currencies, currency } = currencyState;

  useEffect(() => {
    const currPrice =
      Math.round(currencies[currency].rate * amount) +
      currencies[currency].sign;
    setPrice(currPrice);
  }, [amount, currencies, currency]);

  return <span>{priceByCurrency}</span>;
}
