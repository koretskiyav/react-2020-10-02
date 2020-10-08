import React from 'react';

import shortid from 'shortid';

import Product from './product';

const Menu = ({ menu }) => {
  return (
    <div>
      {menu.map((product) => (
        <Product key={shortid.generate()} product={product} />
      ))}
    </div>
  );
};

export default Menu;
