import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';

import {
  productsListSelector,
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';

import { loadProducts } from '../../redux/actions';
import { useEffect } from 'react';

import styles from './menu.module.css';

const Menu = ({ products, restaurantId, loadProducts, loading, loaded }) => {
  console.log(products);
  useEffect(() => {
    loadProducts(restaurantId);
  }, [restaurantId]); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  return (
    <div className={styles.menu}>
      <div>
        {products.map((id) => (
          <Product key={id} id={id} />
        ))}
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );
};

Menu.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(
  (state) => ({
    products: productsListSelector(state),
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state),
  }),
  { loadProducts }
)(Menu);
