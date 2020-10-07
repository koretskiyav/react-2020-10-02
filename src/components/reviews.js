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

  console.log(props);
  return (
    <div>
      {props.reviews.map((item) => (
        <div key={item.id}>
          <p>{item.user}</p>
          <p>{item.text}</p>
        </div>
      ))}
      <Rate rate={finalRate} />
    </div>
  );
  // return (
  //     <div>
  //         <Rate rate={finalRate} />
  //
  //     </div>
  //     );
}

export default Reviews;
