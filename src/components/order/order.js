import React from 'react';
import ProductOrder from '../product-order';
import { connect } from 'react-redux';
import { clear } from '../../redux/actions';

import styles from './order.module.css';

const Order = ({ orderProducts, order, total, clear }) => {
  return (
    <div className={styles.order}>
      <p className={styles.title}>Your order:</p>

      <div>
        {orderProducts.map((menu) =>
          menu.map((product) => {
            product
              ? (total += product.price * order[`${product.id}`])
              : (total += 0);
            return product ? (
              <ProductOrder key={product.id} product={product} />
            ) : null;
          })
        )}
      </div>

      <div className={styles.total}>
        <p>Total: {total}$</p>
        <button className={styles.button} onClick={() => clear()}>
          clear basket
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const total = state.total;
  const order = state.order;
  const restaurants = state.restaurants;
  const orderProducts = restaurants.map((restaurant) =>
    restaurant.menu.map((product) => {
      return order[`${product.id}`] > 0 ? product : null;
    })
  );
  return {
    orderProducts,
    order,
    total,
  };
};

const mapDispatchToProps = {
  clear,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
