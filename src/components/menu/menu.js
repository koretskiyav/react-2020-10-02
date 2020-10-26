import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadProducts } from '../../redux/actions';
import {
  productsLoadingSelector,
  productsLoadedSelector,
  restaurantMenuSelector,
} from '../../redux/selectors';

import Loader from '../loader';
import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  loadProductsIfNeeded = () => {
    const { loadProducts, loading, loaded } = this.props;
    if (!loading && !loaded) {
      loadProducts(this.props.match.params.id);
    }
  };

  componentDidMount() {
    this.loadProductsIfNeeded();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.restaurantId !== this.props.restaurantId) {
      this.loadProductsIfNeeded();
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu, loading } = this.props;
    if (loading) {
      return <Loader />;
    }

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
  createStructuredSelector({
    menu: restaurantMenuSelector,
    loading: productsLoadingSelector,
    loaded: productsLoadedSelector,
  }),
  { loadProducts }
)(Menu);
