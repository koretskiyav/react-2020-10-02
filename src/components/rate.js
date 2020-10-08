import React from 'react';

export default function Rate(props) {
  if (props.rating < 1 || props.rating > 5) return null;
  return <div>Rating: {props.rating}</div>;
}
