import inCurrency from '../utils/currency';
import { useContext } from 'react';
import { currencyContext } from '../context/currency-context';

export default function useCurrency() {
  const { currency } = useContext(currencyContext);

  return {
    currencyCode: currency,
    inCurrency: (value) => inCurrency(value, currency),
  };
}
