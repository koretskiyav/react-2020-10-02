import React, { useMemo } from 'react';
import Rate from './rate';

function Reviews(props) {
  // const ratingLength = props.reviews.length;
  // let sumRating = 0;
  //
  // const activeSum = useMemo(
  //     () => props.reviews.map((el) => {
  //       return (sumRating += el.rating);
  //     }), [props.reviews, sumRating]
  // );
  // const finalRate = Math.floor(sumRating / ratingLength);
  //
  // console.log(finalRate);

  const finalRate = useMemo(
    () =>
      Math.floor(
        props.reviews.reduce((acc, item) => acc + item.rating, 0) /
          props.reviews.length
      ),
    [props.reviews]
  );

  return <Rate rate={finalRate} />;
}

export default Reviews;
