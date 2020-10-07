import React from 'react';
import Rate from './rate';

function Reviews(props) {
  const ratingLength = props.reviews.length;
  let sumRating = 0;
  props.reviews.map((el) => {
    return (sumRating += el.rating);
  });
  const finalRate = Math.floor(sumRating / ratingLength);

  console.log(finalRate);

  return <Rate rate={finalRate} />;
}

export default Reviews;
