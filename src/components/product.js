import React from 'react';

import counter from '../hocs/counter';

const Product = ({ count, increment, decrement, ...props }) => {
  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default counter(Product);
