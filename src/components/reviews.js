import React from 'react';
import Review from './review';

export default function Reviews(props) {
  return (
    <div>
      <p>Reviews:</p>
      {props.reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
