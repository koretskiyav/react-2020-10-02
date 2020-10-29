import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../context/user-context';
import successfulOrder from '../../pages/successful-order';
import errorPage from '../../pages/error-page';
import { CurrencyProvider } from '../../context/currency-context';

export default () => {
  const [name, setName] = useState('Igor');
  const [currency, setCurrency] = useState('USD');
  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider value={{ currency, setCurrency }}>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/successfull-order" component={successfulOrder} />
            <Route path="/error" component={errorPage} />
            <Route path="/" component={() => '404 - not found'} />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};
