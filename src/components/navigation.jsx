import React from 'react';

export default function Navigation(props) {
  return (
    <div>
      {props.restaurants.map((restaurant) => (
        <button
          onClick={() => props.onRestaurantClick(restaurant.id)}
          key={restaurant.id}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
}
