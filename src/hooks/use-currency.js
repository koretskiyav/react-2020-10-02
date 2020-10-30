import { useState } from 'react';
import { getNextCurrency, convert } from '../context/currency-contex';

export default function useCurrency(
  initialCurrency = {
    sign: '$',
    convert: convert,
    ratio: 1,
    key: 1,
    nextCurrency: getNextCurrency,
  }
) {
  const [currency, setCurrency] = useState(initialCurrency);

  const shortConvert = (amount) => {
    return currency.convert(amount, currency.sign, currency.ratio);
  };

  const nextCurrency = () => setCurrency(currency.nextCurrency(currency));
  return { currency, shortConvert, nextCurrency };
}
