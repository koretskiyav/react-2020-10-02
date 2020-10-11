import React, { PureComponent } from 'react';
import Restaurants from './restaurants';
import '../css/style.css';
import PropTypes from 'prop-types';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.restaurants = this.props.restaurants;
  }

  render() {
    const restaurants = this.restaurants;
    return (
      <div className='root'>

        <Restaurants restaurants={this.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}
