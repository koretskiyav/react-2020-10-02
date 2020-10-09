import React, { useState, useMemo } from 'react';
import Navigation from './navigation';
import Restaurant from './restaurant';

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);

  // const activeRestaurant = props.restaurants.find(
  //   (restaurant) => restaurant.id === activeId
  // );

  // Memorization
  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [props.restaurants, activeId]
  );

  return (
    <div>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={(id) => {
          setActiveId(id);
          console.log(activeRestaurant);
        }}
      />
      <Restaurant activeRestaurant={activeRestaurant} />
    </div>
  );
}
