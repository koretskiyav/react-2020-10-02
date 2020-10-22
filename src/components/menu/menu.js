import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';
import {
  isProductsLoadedSelector,
  productsListSelector,
  productsLoadingSelector,
  productsLoadedSelector,
} from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';

import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = {
    error: null,
  };

  componentDidMount() {
    const {
      restaurantId,
      loading,
      loadProducts,
      isProductsLoadedSelector,
    } = this.props;

    if (!loading && !isProductsLoadedSelector) loadProducts(restaurantId);
  }

  componentDidUpdate(prevProps) {
    const { restaurantId, loading, loadProducts } = this.props;
    const shouldUpdate = prevProps.restaurantId !== restaurantId;

    if (shouldUpdate && !loading) loadProducts(restaurantId);
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { products, loading, loaded } = this.props;

    if (loading || !loaded) return <Loader />;

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {products.map((product) => (
            <Product key={product.id} id={product.id} />
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
  (state, ownProps) => ({
    isProductsLoadedSelector: isProductsLoadedSelector(
      state,
      ownProps.restaurantId
    ),
    products: productsListSelector(state),
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state),
  }),
  { loadProducts }
)(Menu);
