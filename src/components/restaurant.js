import React, { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

const infoWrapperStyle = {
  display: 'flex',
};

const infoBlockStyle = {
  margin: '10px',
  padding: '10px',
  width: '50%',
  border: '1px solid grey',
};

const ratingBlockStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const Restaurant = ({ activeRestaurant }) => {
  const { menu, reviews } = activeRestaurant;

  const averageRating = useMemo(
    () =>
      Math.floor(
        reviews.map(({ rating }) => rating).reduce((acc, curr) => acc + curr) /
          reviews.length
      ),
    [reviews]
  );

  return (
    <>
      <div style={ratingBlockStyle}>
        <strong>Average rating</strong>
        <Rate rating={averageRating} />
      </div>
      <div style={infoWrapperStyle}>
        <div style={infoBlockStyle}>
          <strong>Menu:</strong>
          <Menu menu={menu} />
        </div>
        <div style={infoBlockStyle}>
          <strong>Reviews:</strong>
          <Reviews reviews={reviews} />
        </div>
      </div>
    </>
  );
};

export default Restaurant;
