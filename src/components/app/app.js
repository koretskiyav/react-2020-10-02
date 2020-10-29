import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import ErrorPage from '../../pages/error-page';
import SuccessPage from '../../pages/success-page';
import { UserProvider } from '../../context/user-context';
import { CurrencyProvider } from '../../context/currency-context';

export default () => {
  const [name, setName] = useState('Igor');
  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider>
          <Header />
          <Switch>
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={RestaurantsPage} />
            <Route path="/error" component={ErrorPage} />
            <Route path="/success" component={SuccessPage} />
            <Redirect
              exact
              from="/"
              to={`/restaurants/a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2/menu`}
            />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};
