import React from 'react';
import Menu from './menu';
import Rating from './rating';
import Reviews from './reviews';

export const Restaurant = (props) => {
  const { menu, reviews } = props;

  const rating =
    reviews.reduce((sum, { rating }) => sum + rating, 0) / reviews.length;

  return (
    <div>
      <p>
        Average rating: <Rating rating={rating} />
      </p>

      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default Restaurant;
