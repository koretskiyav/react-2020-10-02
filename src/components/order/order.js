import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { increment, decrement, remove } from '../../redux/actions';

const mapStateToProps = (state) => {
  const allProducts = state.restaurants.map(({ menu }) => menu).flat();
  const order = state.order;
  const selectedProducts = allProducts
    .filter(({ id }) => order[id])
    .map((item) => ({
      ...item,
      amount: order[item.id],
      productTotal: order[item.id] * item.price,
    }));

  const total = selectedProducts.reduce(
    (acc, { productTotal }) => acc + productTotal,
    0
  );

  return {
    selectedProducts,
    total,
  };
};

const mapDispatchToProps = {
  decrement,
  increment,
  remove,
};

const Order = ({ selectedProducts, total, decrement, increment, remove }) => (
  <div>
    {selectedProducts.map(({ id, name, productTotal, amount }) => (
      <div key={id}>
        <div>Name: {name}</div>
        <div>Price: {productTotal} $</div>
        <div>Amount: {amount}</div>
        <button onClick={() => increment(id)}>+</button>
        <button onClick={() => decrement(id)}>-</button>
        <button onClick={() => remove(id)}>x</button>
      </div>
    ))}
    <br />
    Total: {total}
  </div>
);

Order.propTypes = {
  selectedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      productTotal: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
