import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  return (
    <div>
      <Menu menu={props.activeRestaurant.menu} />
      <Reviews activeRestaurant={props.activeRestaurant} />
    </div>
  );
}
