import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';
import Restaurant from './restaurant';

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
      <h2>Меню ресторана&nbsp;{activeRestaurant.name}</h2>
      <Menu menu={activeRestaurant.menu} />
      <h2>О ресторане</h2>
      <Restaurant activeRestaurant={activeRestaurant} />
    </div>
  );
}
