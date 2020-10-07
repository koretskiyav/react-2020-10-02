import React from 'react';
import Rate from './rate';

const reviewBlockStyle = {
  margin: '10px 0',
  padding: '10px',
  background: '#e8e8e8',
};

const Reviews = ({ reviews }) => (
  <div>
    {reviews.map(({ id, rating, text, user }) => (
      <div key={id} style={reviewBlockStyle}>
        <strong>{user}</strong>
        <Rate rating={rating} />
        <br />
        <div>{text}</div>
      </div>
    ))}
  </div>
);

export default Reviews;
