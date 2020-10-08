import React from 'react';

export default function Navigation(props) {
  return (
    <div className="center">
      {props.restaurants.map((restaurant) => (
        <button
          className="nav-btn"
          key={restaurant.id}
          onClick={() => props.onRestaurantClick(restaurant.id)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
}
