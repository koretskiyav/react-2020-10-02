import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './counter.module.css';
import MinusIcon from './icons/minus.svg';
import PlusIcon from './icons/plus.svg';
import CrossIcon from './icons/cross.svg';

import { increment, decrement, remove } from '../../redux/actions';

export const RawCounter = ({
  productId,
  canRemove,
  amount,
  increment,
  decrement,
  remove,
}) => (
  <div className={styles.counter}>
    <div className={styles.count} data-id="product-amount">
      {amount}
    </div>

    <div className={styles.buttons}>
      <button
        className={styles.button}
        onClick={() => decrement(productId)}
        data-id="product-decrement"
      >
        <img src={MinusIcon} alt="minus" />
      </button>
      <button
        className={styles.button}
        onClick={() => increment(productId)}
        data-id="product-increment"
      >
        <img src={PlusIcon} alt="plus" />
      </button>

      {canRemove ? (
        <button
          className={styles.button}
          onClick={() => remove(productId)}
          data-id="product-remove"
        >
          <img src={CrossIcon} alt="clear" />
        </button>
      ) : null}
    </div>
  </div>
);

RawCounter.propTypes = {
  canRemove: PropTypes.bool,
  productId: PropTypes.string.isRequired,

  // `counter` HOC props
  amount: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  remove: PropTypes.func,
};

const mapState = (state, ownProps) => ({
  amount: state.order[ownProps.productId] || 0,
});

const mapDispatch = {
  decrement,
  increment,
  remove,
};

export const Counter = connect(mapState, mapDispatch)(RawCounter);
export default Counter;
