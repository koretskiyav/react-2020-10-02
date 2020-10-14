import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import { connect } from 'react-redux';
import { init_products } from '../../redux/actions';

class App extends PureComponent {
  constructor(props) {
    super(props);
    props.init_products(props.restaurants);
  }
  render() {
    return (
      <div>
        <Header />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  restaurants: state.restaurants || [],
});

const mapDispatchToProps = (dispatch) => ({
  init_products: (restaurants) => dispatch(init_products(restaurants)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
