import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import { UserProvider } from '../../context/user-context';
import OrderResult from '../order-result/order-result';
import { currencies, CurrencyProvider } from '../../context/currency-context';

export default () => {
  const [name, setName] = useState('Igor');
  const [currency, setCurrency] = useState(currencies['usd']);

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider value={{ currencies, currency, setCurrency }}>
          <Header />
          <Switch>
            <Route exact path="/checkout" component={Basket} />
            <Route exact path="/checkout/result" component={OrderResult} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" component={() => <h1>Error Page</h1>} />
            <Redirect exact from={'/'} to={'/restaurants'} />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};
