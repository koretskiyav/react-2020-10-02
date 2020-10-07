import React from 'react';
import Rate from './rate';

export default function Reviews({ reviews }) {
  return (
    <div>
      {reviews.map(({ id, rating, text, user }) => (
        <div key={id}>
          <p>
            <strong>{user}</strong>
          </p>
          <p>{text}</p>
          <p>Rate: {<Rate rating={rating} />}</p>
        </div>
      ))}
    </div>
  );
}
