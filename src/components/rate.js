import React from 'react';

function Rate(props) {
  const { rating } = props;

  return <div>{Math.round(rating * 10) / 10}</div>;
}

export default Rate;
