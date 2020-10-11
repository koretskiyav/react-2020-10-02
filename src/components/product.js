import React from 'react';
import counter from '../hocs/counter';
import PropTypes from 'prop-types';

function Product(props) {
  const { count, increment, decrement } = props;

  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default counter(Product);

Product.propTypes = {
  product: PropTypes.shape({
    ingredients: PropTypes.array.isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  amount: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
};

