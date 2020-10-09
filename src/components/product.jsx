import React from 'react';
import counter from '../hocs/counter';

function Product(props) {
  const { count, increment, decrement } = props;

  return (
    <div className="product-card">
      <p>{props.product.name}</p>
      <p>{props.product.price}$</p>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default counter(Product);
