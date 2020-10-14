import React, { PureComponent } from 'react';
import Restaurants from '../restaurants';
import Header from '../header';
import Order from '../order/order';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Order />
        <Header />
        <Restaurants />
      </div>
    );
  }
}
