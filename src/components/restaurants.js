import React, { useState, useMemo } from 'react';
import Navigation from './navigation';
import Restaurant from './restaurant';

export default function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [restaurants, activeId]
  );

  return (
    <div>
      <Navigation restaurants={restaurants} onRestaurantClick={setActiveId} />
      <Restaurant
        reviews={activeRestaurant.reviews}
        menu={activeRestaurant.menu}
      />
    </div>
  );
}
