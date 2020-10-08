import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  let averageRating = 0;
  props.restaurant.reviews.map(
    (review, index) => (averageRating += review.rating)
  );
  averageRating = averageRating / props.restaurant.reviews.length;

  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <Reviews reviews={props.restaurant.reviews} />
      <p>Average rating:</p>
      <Rate rating={Math.round(averageRating)} />
    </div>
  );
}
