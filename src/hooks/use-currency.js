import currencyContext from '../hooks/currency-context';
import { useContext } from 'react';

export const useCurrency = () => {
  return useContext(currencyContext).currency;
};
