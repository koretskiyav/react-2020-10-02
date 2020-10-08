import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import avRating from '../hocs/average-raiting';

const Restaurant = ({ restaurant, avRating }) => {
  return (
    <div>
      <b>Средний рейтинг {avRating}</b>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};

export default avRating(Restaurant);
