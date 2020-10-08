import React from 'react';

export default function Rate(props) {
  const { rating } = props;

  return <div>{rating ? <p>Rating: {rating}</p> : ''}</div>;
}
