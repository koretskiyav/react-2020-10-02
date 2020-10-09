import React from 'react';
import Product from './product';

export default function Menu(props) {
  return (
    <div>
      <h3>Menu</h3>
      {props.menu.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
