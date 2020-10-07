import React from 'react';

export default function Rate(props) {
  const { rating } = props;

  if (!(rating >= 1 && rating <= 5)) {
    return null;
  }

  return <span>{rating}*</span>;
}
