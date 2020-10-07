import React from 'react';

export default function reviews(props) {
  const reviews = props.reviews.map(getReviewTemplate);

  return (
    <div>
      <h3>Reviews</h3>
      {reviews}
    </div>
  );
}

function getReviewTemplate(review) {
  return (
    <div key={review.id}>
      {' '}
      <h4>
        {review.user} - {review.rating}
      </h4>{' '}
      {review.text}
    </div>
  );
}
