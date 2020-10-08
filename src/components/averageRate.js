import React from 'react';

const average = (nums) => {
  return nums.reduce((a, b) => a + b) / nums.length;
};

const AverageRate = ({ review }) => {
  const ratingArr = [];

  review.map((item) => ratingArr.push(item.rating));

  return <div>Average rate: {ratingArr.length ? average(ratingArr) : 0}</div>;
};

export default AverageRate;
