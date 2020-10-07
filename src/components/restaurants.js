import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);

  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [props.restaurants, activeId]
  );

  const show =
    activeRestaurant.reviews.reduce((sum, currect) => sum + currect.rating, 0) /
    activeRestaurant.reviews.length;
  const averageRating = { rating: show.toFixed(1) };

  return (
    <div>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={setActiveId}
      />
      <Menu menu={activeRestaurant.menu} />
      <Rate rate={averageRating} />
      <h2>Reviews:</h2>
      <Reviews reviews={activeRestaurant.reviews} />
    </div>
  );
}
