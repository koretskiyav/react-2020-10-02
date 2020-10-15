import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './order.module.css';
import { increment, decrement, remove } from '../../redux/actions';

const Order = ({ order, orderedProducts, increment, decrement, remove }) => {
  if (orderedProducts.length < 1) return null;
  let total = 0;
  const body = orderedProducts.map((product) => {
    const subtotal = product.price * order[product.id];
    total += subtotal;
    return (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.price} $</td>
        <td>
          <button onClick={() => decrement(product.id)}>-</button>
          <span className={styles.quantity}>{order[product.id]}</span>
          <button onClick={() => increment(product.id)}>+</button>
        </td>
        <td>{subtotal} $</td>
        <td>
          <button onClick={() => remove(product.id)}>X</button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{body}</tbody>
        <tfoot>
          <tr>
            <th>TOTAL</th>
            <th colSpan="4">{total} $</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.object.isRequired,
  orderedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  remove: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { order, restaurants } = state;
  const products = restaurants
    .map(({ menu }) => menu)
    .reduce((acc, val) => acc.concat(val), []);
  const orderedProducts = products.filter(({ id }) => order[id]);
  return {
    order: order,
    orderedProducts: orderedProducts,
  };
};

const mapDispatchToProps = {
  decrement,
  increment,
  remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
