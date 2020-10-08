import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';
import rating from '../hocs/rating';

function Restaurant(props) {
  const { menu, reviews, averageRating } = props;

  return (
    <>
      <div className="row">
        <div className="col-12">
          <Rate rating={averageRating} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Menu menu={menu} />
        </div>
        <div className="col-6">
          <Reviews reviews={reviews} />
        </div>
      </div>
    </>
  );
}

export default rating(Restaurant);
