import React from 'react';
import BasketItem from '../basketItem/basketItem';
import styles from './basket.module.css';
import { connect } from 'react-redux';

function Basket({ basket, orders }) {
  return (
    <div className={styles.basket}>
      <h3 className={styles.header}>Basket</h3>
      {basket
        .filter((product) => orders[product.id] > 0)
        .map((product) => (
          <div key={product.id} className={styles.orderItem}>
            <BasketItem product={product} />
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  orders: state.order,
});

export default connect(mapStateToProps)(Basket);
