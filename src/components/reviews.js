import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div>
      <b>Reviews</b>
      {props.reviews.map((review) => (
        <li key={review.id}>
          <div>{review.text}</div>
          <div>{review.user}</div>
          <Rate rating={review.rating} />
        </li>
      ))}
    </div>
  );
}
