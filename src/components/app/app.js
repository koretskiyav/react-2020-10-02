import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../context/user-context';
import {
  CurrencyProvider,
  currencies,
  initialCurrency,
} from '../../context/currency-context';

export default () => {
  const [name, setName] = useState('Igor');
  const [currency, setCurrency] = useState(initialCurrency);
  const getCurrency = () => currencies[currency];

  const currencyProviderValue = {
    currency,
    currencies,
    setCurrency,
    getCurrency,
  };

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider value={currencyProviderValue}>
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" component={() => <h1>Error Page</h1>} />
            <Redirect to="/restaurants" />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};
