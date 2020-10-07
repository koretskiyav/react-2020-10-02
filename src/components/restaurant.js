import React, { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  const reviewsList = props.restaurant.reviews;
  const averageRating = useMemo(
    () =>
      reviewsList.reduce((total, next) => total + next.rating, 0) /
      reviewsList.length,
    [reviewsList]
  );

  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <br />
      <br />
      <div>
        <strong>
          Average rating: <Rate rating={averageRating} />
        </strong>
      </div>
      <Reviews reviews={reviewsList} />
    </div>
  );
}
