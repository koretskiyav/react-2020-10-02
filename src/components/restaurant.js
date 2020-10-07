import React, { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  const finalRate = useMemo(
    () =>
      'средний ' +
      Math.floor(
        props.restaurant.reviews.reduce((acc, item) => acc + item.rating, 0) /
          props.restaurant.reviews.length
      ),
    [props.restaurant.reviews]
  );
  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <Reviews reviews={props.restaurant.reviews} />
      <Rate rate={finalRate} />
    </div>
  );
}
