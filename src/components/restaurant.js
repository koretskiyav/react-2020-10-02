import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  const averageRating =
    props.reviews.reduce((total, review) => total + review.rating, 0) /
    props.reviews.length;
  return (
    <div>
      <h4 className="center">
        <Rate rating={averageRating.toFixed(1)} />
      </h4>
      <div className="container">
        <p>
          <h3>MENU</h3>
          <Menu menu={props.menu} />
        </p>
        <p>
          <h3>REVIEWS</h3>
          <Reviews reviews={props.reviews} />
        </p>
      </div>
    </div>
  );
}
