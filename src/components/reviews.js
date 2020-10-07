import React from 'react';
import Review from './review';

export default function Reviews(props) {
  const body = props.reviews.map((review) => (
    <li key={review.id}>
      <Review review={review} />
    </li>
  ));
  return (
    <div>
      <h2>Reviews</h2>
      <ul>{body}</ul>
    </div>
  );
}
