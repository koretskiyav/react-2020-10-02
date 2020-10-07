import React from 'react';
import avarageRating from '../hocs/avarage-rating';
import Menu from './menu';
import Reviews from './reviews';

function Restaurant(props) {
  return (
    <div className="container">
      <p>Avarage rating: {props.avarageRating}</p>
      <div className="row">
        <div className="col-6">
          <Menu menu={props.restaurant.menu} />
        </div>
        <div className="col-6">
          <Reviews reviews={props.restaurant.reviews} />
        </div>
      </div>
    </div>
  );
}

export default avarageRating(Restaurant);
