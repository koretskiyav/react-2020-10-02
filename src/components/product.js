import React from 'react';
import counter from '../hocs/counter';

function Product(props) {
  const { count, increment, decrement } = props;

  return (
    <div style={{ padding: '10px 0', borderBottom: 'solid 1px lightgray' }}>
      <p style={{ fontSize: '1.2em' }}>{props.product.name}</p>
      <p style={{ fontSize: '1.1em' }}>${props.product.price}</p>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default counter(Product);
