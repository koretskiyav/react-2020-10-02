import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './order.module.css';
import { restaurants } from '../../fixtures';
import { increment, decrement } from '../../redux/actions';
import ProductInCart from '../product-in-cart';

const Order = (props) => {
  const { state } = props;
  const arrKeys = Object.keys(props.state);
  return (
    <div className={styles.order}>
      <div className={styles.menu}>
        <div>{arrKeys.map((id) =>
          <ProductInCart key={id} product={getProduct(id)} />
        )}
          <p className={styles['order__total-price']}>
            Стоимость заказа:&nbsp;
            {
              totalSum(arrKeys, state)
            }$
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  // amount: state.order[ownProps.product.id] || 0,
  state: state.order
});

const mapDispatchToProps = {
  decrement,
  increment,
};

const getProduct = (id => {
  return restaurants.reduce((acc, item) => {
    const result = item.menu.find(elem => elem.id === id);
    if (result) {
      acc = result;
    }
    return acc;
  }, {})
});

const totalSum = (arrKeys, state) => {
  return arrKeys.reduce((acc, item) => {
    return acc += getProduct(item).price * state[item]
  }, 0)
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);