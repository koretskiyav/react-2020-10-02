import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import Basket from '../basket';
import RestaurantsPage from '../../pages/restaurants-page';
import MenuPage from '../../pages/menu-page';
import ReviewsPage from '../../pages/reviews-page';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={() => 'main page'} />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants/:id/menu" component={MenuPage} />
          <Route path="/restaurants/:id/reviews" component={ReviewsPage} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/" component={() => '404 - not found'} />
        </Switch>
      </div>
    );
  }
}
