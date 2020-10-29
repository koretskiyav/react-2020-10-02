import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../context/user-context';
import { CurrencyProvider } from '../../context/currency-context';

export default () => {
  const [name, setName] = useState('Igor');
  const [currency, setCurrency] = useState('usd');
  return (
    <div>
      <CurrencyProvider value={{ currency, setCurrency }}>
        <UserProvider value={{ name, setName }}>
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" component={() => <h1>Error Page</h1>} />
            <Route
              path="/order-success"
              component={() => <h1>Order placed Successfully</h1>}
            />
            <Redirect exact from="/" to={`/restaurants`} />
            <Route path="/" component={() => '404 - not found'} />
          </Switch>
        </UserProvider>
      </CurrencyProvider>
    </div>
  );
};
