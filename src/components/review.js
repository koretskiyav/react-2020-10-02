import React from 'react';
import Rate from './rate';

export default function Review(props) {
  return (
    <div>
      <hr />
      <p>{props.review.user}</p>
      <p>{props.review.text}</p>
      <div>
        Rating: <Rate rating={props.review.rating} />
      </div>
    </div>
  );
}
