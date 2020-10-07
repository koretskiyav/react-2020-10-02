import React from 'react';

export default function Rate({ rating }) {
  return (
    <span>
      <strong>{rating ? rating : 'No votes'}</strong>
    </span>
  );
}
