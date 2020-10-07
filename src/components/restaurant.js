import React from 'react';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  return (
    <div>
      {props.activeRestaurant}
      <p>
        <Menu menu={props.menu} />
      </p>
      <p>
        <Reviews reviews={props.reviews} />
      </p>
    </div>
  );
}
