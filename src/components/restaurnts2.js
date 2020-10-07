import React, { useMemo, useState } from 'react';
import Reviews from './reviews';
import Navigation from './navigation';
import Menu from './menu';

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
      <Menu menu={activeRestaurant.menu} reviews={activeRestaurant.reviews} />
      <h2>Reviews:</h2>
      <Reviews reviews={props.reviews} />
    </div>
  );
}
