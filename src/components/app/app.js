import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../context/user-context';
import { CurrencyProvider, currencies } from '../../context/currency-context';

export default () => {
  const [name, setName] = useState('Igor');
  const [currentCurrency, setCurrentCurrency] = useState(currencies.usd);
  return (
    <div>
      <CurrencyProvider
        value={{ currentCurrency, setCurrentCurrency, currencies }}
      >
        <UserProvider value={{ name, setName }}>
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" component={() => <h1>Error Page</h1>} />
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/" component={() => '404 - not found'} />
          </Switch>
        </UserProvider>
      </CurrencyProvider>
    </div>
  );
};
