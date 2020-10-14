import React from 'react';
import Product from '../product';
import { connect } from 'react-redux';

import styles from './basket.module.css';

const Basket = ({ basket, orders }) => {
  return (
    <div className={styles.basket}>
      {basket
        .filter((product) => orders[product.id] > 0)
        .map((product) => (
          <Product key={product.id} product={product} showReset={true} />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  orders: state.order,
});

export default connect(mapStateToProps)(Basket);
