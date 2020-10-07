import React from 'react';

function Rate(props) {
  console.log('rate', props);
  const countReviews = props.rate.length;
  const sumRating = props.rate.reduce((acc, curValue) => {
    return acc.rating + curValue.rating;
  });
  const finalRate = sumRating / countReviews;

  return <p>{`Рейтинг: ${finalRate} зв`}</p>;
}

export default Rate;
