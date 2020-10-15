import React from 'react';
import { connect } from 'react-redux';
import OrderItem from './orderItem';
import styles from './order.module.css';

import { deleteItem } from '../../redux/actions';

const Orders = ({ ordersAmount, ordersList, totalPrice }) => {
  return (
    <div className={styles.orders}>
      <div>
        <h3>
          Orders: <span>{ordersAmount && ordersAmount}</span>
        </h3>

        {ordersList.map((el, i) => {
          return (
            <div key={el.id}>
              <OrderItem orderItem={el} />
            </div>
          );
        })}

        <div className={styles.totalSum}>
          Total sum: <b>{totalPrice}$</b>
        </div>
      </div>
    </div>
  );
};

const getTotal = ({ order }, item) =>
  order.reduce((prev, curr) => (prev ? prev + curr[item] : curr[item]), 0);

const mapStateToProps = (state) => ({
  ordersAmount: getTotal(state, 'amount'),
  totalPrice: getTotal(state, 'totalPrice'),
  ordersList: state.order,
});

const mapDispatchToProps = {
  deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
