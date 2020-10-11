import React, { useState, useMemo } from 'react';
import Menu from '../Menu';
import Navigation from '../Navigation';
import Restaurant from '../Restaurant';
import PropTypes from 'prop-types';

export default function Restaurants({ restaurants }) {
  // console.log(restaurants);
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [restaurants, activeId]
  );

  return (
    <div>
      <Navigation
        restaurants={restaurants}
        onRestaurantClick={setActiveId}
      />
      <h2>Меню ресторана&nbsp;{activeRestaurant.name}</h2>
      <Menu menu={activeRestaurant.menu} />
      <h2>О ресторане</h2>
      <Restaurant activeRestaurant={activeRestaurant} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    menu: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
  )
}