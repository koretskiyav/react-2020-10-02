import React from 'react';
import Rate from './rate';

const Reviews = ({ reviews }) => (
  <div>
    <b>Отзывы</b>
    {reviews.map((review) => (
      <div key={review.id}>
        <p>{review.user}</p>
        <p>{review.text}</p>
        <Rate rate={review.rating} />
      </div>
    ))}
  </div>
);

export default Reviews;
