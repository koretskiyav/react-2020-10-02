import React from 'react';

import shortid from 'shortid';

import Rate from './rate';

const Reviews = ({ review }) => {
  return (
    <div>
      {review.map((review) => (
        <div key={shortid.generate()}>
          <div>
            name: {review.user}, text: {review.text}
          </div>
          <Rate rate={review.rating} />
        </div>
      ))}
    </div>
  );
};

export default Reviews;
