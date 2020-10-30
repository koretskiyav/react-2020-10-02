import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import OrderErrorPage from '../../pages/error-page';
import OrderSuccessPage from '../../pages/success-page';
import { UserProvider } from '../../context/user-context';

export default () => {
  const [name, setName] = useState('Igor');
  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/restaurants/" />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/order-error" component={OrderErrorPage} />
          <Route path="/order-success" component={OrderSuccessPage} />
          <Route path="/error" component={() => <h1>Error Page</h1>} />
          <Route path="/" component={() => '404 - not found'} />
        </Switch>
      </UserProvider>
    </div>
  );
};
