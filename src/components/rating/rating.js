import React from 'react';

import './rating.css';
import star from './star.svg';

export const Rating = (props) => {
  const { rating } = props;

  const width = Number.isInteger(rating)
    ? 0
    : (1 - rating + Math.floor(rating)).toFixed(2) * 100;

  const lastStar = (
    <span key={-1} className="rating__star">
      <img src={star} width="16" height="16" alt="" />
      <span className="rating__star-shadow" style={{ width: `${width}%` }} />
    </span>
  );

  return (
    <span title={rating.toFixed(2)}>
      {[...Array(Math.ceil(rating))].map((v, i, arr) =>
        i + 1 < arr.length ? (
          <img key={i} src={star} width="16" height="16" alt="" />
        ) : (
          lastStar
        )
      )}
    </span>
  );
};

export default Rating;
