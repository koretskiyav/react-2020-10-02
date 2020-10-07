import React from 'react';
import Product from './product';

export default function Menu(props) {
  return (
    <div style={{ flex: '1 1' }}>
      {props.menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
