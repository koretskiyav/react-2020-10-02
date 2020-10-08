import React, { useState, useMemo } from 'react';

import Restaurant from './restaurant';
import Navigation from './navigation';

const Restaurants = ({ restaurants }) => {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [restaurants, activeId]
  );

  return (
    <div>
      <Navigation restaurants={restaurants} onRestaurantClick={setActiveId} />
      <Restaurant activeRestaurant={activeRestaurant} />
    </div>
  );
};

export default Restaurants;
