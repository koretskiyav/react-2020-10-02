import React from 'react';

import shortid from 'shortid';

const Navigation = ({ restaurants, onRestaurantClick }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <button
          key={shortid.generate()}
          onClick={() => onRestaurantClick(restaurant.id)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
