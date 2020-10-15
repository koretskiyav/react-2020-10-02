import React from 'react';
import { connect } from 'react-redux';
import styles from './cart-item.module.css';

import { increment, decrement, removeProduct } from '../../../redux/actions';

const CartItem = ({ product, order, increment, decrement, removeProduct }) => {
  return (
    <div className={styles.product}>
      <div className={styles.productName}>{product.name}</div>
      <div className={styles.orderInfo}>
        <span>{product.price} $</span>
        <div>{order[product.id]}</div>
        <div>
          <button onClick={() => increment(product.id)}>+</button>
          <button onClick={() => decrement(product.id)}>-</button>
          <button onClick={() => removeProduct(product.id)}>x</button>
        </div>
        <div>{product.price * order[product.id]} $</div>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  order: state.order,
});

const mapDispatchToProps = {
  decrement,
  increment,
  removeProduct,
};

export default connect(mapStatetoProps, mapDispatchToProps)(CartItem);
