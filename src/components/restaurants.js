import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';
import Reviews from './reviews';

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);

  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [props.restaurants, activeId]
  );

  return (
    <div>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={setActiveId}
      />
      <div style={{ display: 'flex' }}>
        <Menu menu={activeRestaurant.menu} />
        <Reviews reviews={activeRestaurant.reviews} />
      </div>
    </div>
  );
}
