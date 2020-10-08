import React from 'react';
import Rate from './rate';

export default function Review(props) {
  const { user, text, rating } = props.review;

  return (
    <div>
      <p>Name: {user}</p>
      <p>Text: {text}</p>
      <p>
        <Rate rating={rating} />
      </p>
    </div>
  );
}
