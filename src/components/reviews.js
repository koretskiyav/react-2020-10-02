import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((field) => (
        <div key={field.id}>
          <p>{field.user}</p>
          <p>{field.text}</p>
          <Rate rate={field} />
        </div>
      ))}
    </div>
  );
}
