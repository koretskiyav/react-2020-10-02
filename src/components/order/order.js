import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OrderRow from '../order_row';
import styles from './order.module.css';

const Order = ({ order }) => {
  const orderList = useMemo(() => Object.entries(order));
  const orderCost = useMemo(() =>
    orderList.reduce((acc, row) => acc + row[1].price * row[1].amount, 0)
  );
  return (
    <div>
      <div className={styles.heading}> Order - {orderCost} $</div>
      <div>
        {orderList.map((row) => (
          <OrderRow key={row[0]} productId={row[0]} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Order);
