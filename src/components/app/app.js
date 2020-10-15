import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Order from '../order';

export default class App extends PureComponent {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 'auto' }}>
          <Header />
          <Restaurants restaurants={this.props.restaurants} />
        </div>
        <Order />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};
