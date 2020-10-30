import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../context/user-context';
import useCurrency from '../../hooks/use-currency';
import { CurrencyProvider } from '../../context/currency-contex';
import ErrorPage from '../../pages/error-page';

export default () => {
  const [name, setName] = useState('Igor');
  const { currency, shortConvert, nextCurrency } = useCurrency();
  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider value={{ currency, shortConvert, nextCurrency }}>
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/thanks" component={() => <h1>Thanks Page</h1>} />
            <Route path="/error" component={ErrorPage} />
            <Redirect exect from="/" to="/restaurants" />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};
