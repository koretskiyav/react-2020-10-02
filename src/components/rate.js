import React from 'react';
import determinant from '../hocs/determinant';

function Rate(props) {
  const { includedRange, rate } = props;

  return includedRange ? (
    <div>
      <p>Rating: {rate}</p>
    </div>
  ) : (
    ''
  );
}

export default determinant(Rate);
