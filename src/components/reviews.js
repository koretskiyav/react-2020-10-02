import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div>
      <div className="reviews-header" style={{ fontSize: '1.4em' }}>
        Customers reviews:
      </div>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <p>
            {review.user}: {review.text} (Rate: <Rate rate={review.rating} />)
          </p>
        </div>
      ))}
    </div>
  );
}
