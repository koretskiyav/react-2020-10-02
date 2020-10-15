import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Orders from '../orders';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Orders />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};
