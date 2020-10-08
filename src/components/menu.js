import React from 'react';
import Product from './product';

export default function Menu(props) {
  return (
    <div style={{ margin: '30px 0' }}>
      <div style={{ fontSize: '2em' }}> Menu:</div>
      {props.menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
