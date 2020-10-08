import React from 'react';
import Rate from './rate';

export default function Review(props) {
  return (
    <div>
      <h4>{props.review.user}</h4>
      <p>{props.review.text}</p>
      <p style={{ paddingBottom: '10px', borderBottom: 'solid 1px' }}>
        <Rate rating={props.review.rating} />
      </p>
    </div>
  );
}
