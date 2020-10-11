import React from 'react';
import counter from '../../hocs/counter';
import PropTypes from 'prop-types';
import style from './product.module.css';

function Product(props) {
  const { count, increment, decrement } = props;
  console.log(style);
  return (
    <div data-id="product">
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <div className={style.product_amount}>
        <button onClick={decrement}>-</button>
        <div data-id="product-amount">{count}</div>
        <button onClick={increment} data-id="product-increment">+</button>
      </div>
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

