import React from 'react';
import { connect } from 'react-redux';
import MinusIcon from '../../product/icons/minus.svg';
import PlusIcon from '../../product/icons/plus.svg';
import styles from './orderList.module.css';

import { increment, decrement, deleteItem } from '../../../redux/actions';

function OrderItem({ orderItem, increment, decrement, deleteItem }) {
  const { name, id, amount, price, totalPrice } = orderItem;

  return (
    <div className={styles.itemsContainer}>
      <div className={styles.items}>
        <span className={styles.item}>
          {name}: {amount}
          <strong className={styles.price}>{totalPrice}$</strong>
        </span>

        <div className={styles.btnContainer}>
          <button
            className={styles.button}
            onClick={() => decrement(id, name, price)}
          >
            <img src={MinusIcon} alt="minus" />
          </button>

          <button
            className={styles.button}
            onClick={() => increment(id, name, price)}
          >
            <img src={PlusIcon} alt="pluse" />
          </button>

          <button className={styles.closeBtn} onClick={() => deleteItem(id)}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  increment,
  decrement,
  deleteItem,
};

export default connect(null, mapDispatchToProps)(OrderItem);
