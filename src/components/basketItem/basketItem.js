import React from 'react';
import { connect } from 'react-redux';
import styles from './basket.module.css';
import { increment, decrement, reset } from '../../redux/actions';

function BasketItem({ product, amount, decrement, increment, reset }) {
  const { name, price, id } = product;
  const totalPrice = price * amount;
  return (
    <div className={styles.orderItem}>
      <div>
        <h4>Dish: {name}</h4>
      </div>
      <div>
        <button onClick={() => decrement(id)}> - </button>
        {amount}
        <button onClick={() => increment(id)}> + </button>
      </div>
      <h4>{totalPrice} $</h4>
      <button onClick={() => reset(id)}> X </button>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => ({
  orders: state.order,
  amount: state.order[ownProps.product.id] || 0,
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
