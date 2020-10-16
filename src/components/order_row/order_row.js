import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './order_row.module.css';
import MinusIcon from './icons/minus.svg';
import PlusIcon from './icons/plus.svg';
import CancelIcon from './icons/cancel.svg';

import { increment, decrement, cancelProduct } from '../../redux/actions';

const OrderRow = ({
  productId,
  name,
  price,
  amount,
  increment,
  decrement,
  cancelProduct,
  fetchData,
}) => {
  useEffect(() => {
    fetchData && fetchData(productId);
  }, []); // eslint-disable-line

  return (
    <div className={styles.row}>
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>
            {name} {amount * price} $
          </h4>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count}>{amount}</div>
            <div className={styles.buttons}>
              <button
                className={styles.button}
                onClick={() => decrement(productId, price, name)}
                data-id="product-decrement"
              >
                <img src={MinusIcon} alt="minus" />
              </button>
              <button
                className={styles.button}
                onClick={() => increment(productId, price, name)}
              >
                <img src={PlusIcon} alt="plus" />
              </button>
              <button
                className={styles.button}
                onClick={() => cancelProduct(productId)}
              >
                <img src={CancelIcon} alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.productId].amount,
  price: state.order[ownProps.productId].price,
  name: state.order[ownProps.productId].name,
});

const mapDispatchToProps = {
  decrement,
  increment,
  cancelProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderRow);
