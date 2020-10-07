import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <Rate key={review.id} review={review} />
      ))}
    </div>
  );
}
