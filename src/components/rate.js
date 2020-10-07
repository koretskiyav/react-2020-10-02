import React, { useMemo } from 'react';

export default function Rate(props) {
  const rating = useMemo(
    () =>
      props.reviews.reduce((acc, review) => acc + review.rating, 0) /
      props.reviews.length,
    [props.reviews]
  );

  console.log(rating);

  return (
    <div>
      <h3>Rating</h3>
      <div>{rating}</div>
    </div>
  );
}
