import React from 'react';

export default function Rate(props) {
  return (
    <div>
      <p>Рейтинг: {props.review.rating}</p>
    </div>
  );
}
