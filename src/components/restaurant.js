import React from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant(props) {
  const activeRestaurant = props.restaurant;

  return (
    <div>
      <h2>About us</h2>
      <h3>Name</h3>
      <div>{activeRestaurant.name}</div>
      <h3>Image</h3>
      <img alt={activeRestaurant.name} src={activeRestaurant.image}></img>{' '}
      (кстати, с картинкой какие-то проблемы)
      <Menu menu={activeRestaurant.menu} />
      <Rate reviews={activeRestaurant.reviews} />
      <Reviews reviews={activeRestaurant.reviews} />
    </div>
  );
}
