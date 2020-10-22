import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';

import Loader from '../loader';
import {
  restaurantLoadingProductsSelector,
  restaurantLoadedProductsSelector,
  productsListRestaurantSelector,
} from '../../redux/selectors';
import styles from './menu.module.css';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    loadingProducts: PropTypes.bool.isRequired,
    loadedProducts: PropTypes.bool.isRequired,
    loadProducts: PropTypes.func.isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    const {
      restaurantId,
      loadingProducts,
      loadedProducts,
      loadProducts,
    } = this.props;

    if (!loadingProducts && !loadedProducts) loadProducts(restaurantId);
  }

  componentDidUpdate() {
    const {
      restaurantId,
      loadingProducts,
      loadedProducts,
      loadProducts,
    } = this.props;

    if (!loadedProducts && !loadingProducts) loadProducts(restaurantId);
  }

  render() {
    const { menu, loadingProducts, loadedProducts } = this.props;

    if (loadingProducts && !loadedProducts) return <Loader />;

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {menu.map((id) => (
            <Product key={id} id={id} />
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
  (state, props) => ({
    menu: productsListRestaurantSelector(state, props),
    loadingProducts: restaurantLoadingProductsSelector(state, props),
    loadedProducts: restaurantLoadedProductsSelector(state, props),
  }),
  { loadProducts }
)(Menu);
