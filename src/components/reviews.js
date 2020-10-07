import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  const { reviews } = props;

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <header>{review.user}</header>
          <div>{review.text}</div>
          <Rate rating={review.rating} />
        </li>
      ))}
    </ul>
  );
}
