import React from 'react';
import counter from '../hocs/counter';

function Product(props) {
  const { count, increment, decrement } = props;

  return (
    <div style={{ paddingBottom: '10px', borderBottom: 'solid 1px' }}>
      <h4>{props.product.name}</h4>
      <p>{props.product.price} $</p>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default counter(Product);
