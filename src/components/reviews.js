import React from 'react';
import Rate from './rate';

function Reviews(props) {
  console.log('reviews', props);
  return <Rate rate={props.reviews} />;
}

export default Reviews;
