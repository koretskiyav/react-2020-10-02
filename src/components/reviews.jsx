import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  const { reviews } = props;
  return (
    <p>
      <p>
        {reviews.map((review) => (
          <p key={review.id}>
            <div>Name: {review.user}</div>
            <div>Review: {review.text}</div>
            <div>
              Rating: <Rate rate={review.rating}></Rate>
            </div>
          </p>
        ))}
      </p>
    </p>
  );
}
