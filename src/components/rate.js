import React from 'react';

export default function Rate(props) {
  const { rating } = props;

  return (
    <div>
      <span>Rating: </span>
      <span>{rating}</span>
    </div>
  );
}
