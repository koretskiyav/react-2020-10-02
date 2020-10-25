import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { increment, decrement, remove } from '../../../redux/actions';
import Button from '../../button';
import styles from './basket-item.module.css';
import { Link } from 'react-router-dom';
import store from '../../../redux/store';

function BasketItem({
  product,
  amount,
  subtotal,
  increment,
  decrement,
  remove,
}) {
  console.log('product.id = ', product.id);
  const restsArr = Object.values(store.getState().restaurants.entities);
  const restId = restsArr.filter((rest) => {
    return rest.menu.includes(product.id);
  })[0].id;
  console.log('restId = ', restId);
  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <Link key={restId} to={`/restaurants/${restId}`}>
          <p>{product.name}</p>
        </Link>
        {/* <span>{product.name}</span> */}
      </div>
      <div className={styles.info}>
        <div className={styles.counter}>
          <Button
            onClick={() => decrement(product.id)}
            icon="minus"
            secondary
            small
          />
          <span className={styles.count}>{amount}</span>
          <Button
            onClick={() => increment(product.id)}
            icon="plus"
            secondary
            small
          />
        </div>
        <p className={cn(styles.count, styles.price)}>{subtotal} $</p>
        <Button
          onClick={() => remove(product.id)}
          icon="delete"
          secondary
          small
        />
      </div>
    </div>
  );
}

export default connect(null, { increment, decrement, remove })(BasketItem);
