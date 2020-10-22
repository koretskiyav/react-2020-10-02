import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';
import Error from '../error';
import {
  productsLoadingByRestaurantSelector,
  productsLoadedByRestaurantSelector,
  productsErrorByRestaurantSelector,
} from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';

import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    restaurantId: PropTypes.string.isRequired,
    loadProducts: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  update = () => {
    const { needProducts, loadProducts } = this.props;

    if (needProducts) loadProducts();
  };

  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu, error, hasLoader } = this.props;

    if (this.state.error) return <Error {...this.state.error} />;

    if (error) return <Error {...error} />;

    if (hasLoader) return <Loader />;

    return (
      <div className={styles.menu}>
        <div>
          {menu.map((productId) => (
            <Product key={productId} id={productId} />
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

export default connect(
  createStructuredSelector({
    loading: productsLoadingByRestaurantSelector,
    loaded: productsLoadedByRestaurantSelector,
    error: productsErrorByRestaurantSelector,
  }),
  (dispatch, { restaurantId }) => ({
    loadProducts: () => dispatch(loadProducts(restaurantId)),
  }),
  ({ loading, loaded, ...rest }, dispatchProps, ownProps) => ({
    needProducts: !loading && !loaded,
    hasLoader: loading || !loaded,
    ...rest,
    ...dispatchProps,
    ...ownProps,
  })
)(Menu);
