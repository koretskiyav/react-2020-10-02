import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  return (
    <div>
      <b>
        Rating
        {
          <Rate
            rating={
              props.reviews.length > 0
                ? props.reviews.reduce((sum, cur) => sum + cur.rating, 0) /
                  props.reviews.length
                : 0
            }
          />
        }
      </b>
      <Menu menu={props.menu} />
      <Reviews reviews={props.reviews} />
    </div>
  );
}
