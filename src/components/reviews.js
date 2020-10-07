import React from 'react';
import Rate from './rate';

function Reviews(props) {
  return (
    <div>
      {props.reviews.map((item) => (
        <div key={item.id}>
          <p>{item.user}</p>
          <p>{item.text}</p>
          <Rate rate={item.rating} />
        </div>
      ))}
    </div>
  );
}

export default Reviews;
