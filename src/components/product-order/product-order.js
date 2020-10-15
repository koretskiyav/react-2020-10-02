import React from 'react';
import { connect } from 'react-redux';

import styles from './product-order.module.css';

import { increment, decrement, removing } from '../../redux/actions';

const ProductOrder = ({ product, amount, increment, decrement, removing }) => {
  return (
    <div className={styles.product}>
      <div>
        <h4 className={styles.title}>{product.name}</h4>
      </div>
      <div>
        <div className={styles.price}>{product.price} $</div>
        <div className={styles.sum}>{product.price * amount} $</div>
        <div className={styles.counter}>
          <button
            className={styles.button}
            onClick={() => decrement(product.id)}
          >
            -
          </button>
          <div className={styles.count}>{amount}</div>
          <button
            className={styles.button}
            onClick={() => increment(product.id)}
          >
            +
          </button>
          <button
            className={styles.button}
            onClick={() => removing(product.id)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.product.id] || 0,
});

const mapDispatchToProps = {
  decrement,
  increment,
  removing,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductOrder);
