import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Product(props) {
  const averageRating =
    props.restaurant.reviews.reduce((sum, current) => sum + current.rating, 0) /
    props.restaurant.reviews.length;
  return (
    <div>
      <Menu menu={props.restaurant.menu} />

      {props.restaurant.reviews.map((review) => (
        <Reviews key={review.id} review={review} />
      ))}

      <p>Средний рейтинг: </p>
      <Rate rate={averageRating} />
    </div>
  );
}
