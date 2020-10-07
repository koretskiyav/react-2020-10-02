import React from 'react';

export default function Product(props) {
  return (
    <div>
      <p>{Math.round(props.rate)}</p>
    </div>
  );
}
