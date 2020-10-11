import React from 'react';
import Product from '../Product';
import PropTypes from 'prop-types';

export default function Menu(props) {
  const { menu } = props;
  return (
    <div>
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}