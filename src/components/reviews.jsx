import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  let averageRate = 0;
  let counter = 1;
  props.activeRestaurant.reviews.forEach((review) => {
    averageRate += parseInt(review.rating);
    counter += 1;
  });
  console.log(averageRate);
  console.log(counter - 1);
  averageRate = averageRate / (counter - 1);

  return (
    <div>
      <h3>Reviews, av. {averageRate.toFixed(2)}</h3>
      {props.activeRestaurant.reviews.map((review) => (
        <div key={review.id}>
          <p>Name: {review.user}</p>
          <p>Review: {review.text}</p>
          <p>
            Rate: <Rate rate={review.rating} />
          </p>
          <br />
        </div>
      ))}
    </div>
  );
}
