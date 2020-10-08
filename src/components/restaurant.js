import React from 'react';

import Menu from './menu';
import Reviews from './reviews';
import AverageRate from './averageRate';

export default function Restaurant({ activeRestaurant }) {
  return (
    <>
      <Menu menu={activeRestaurant.menu} />
      <Reviews review={activeRestaurant.reviews} />
      <AverageRate review={activeRestaurant.reviews} />
    </>
  );
}
