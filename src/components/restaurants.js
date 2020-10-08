import React, { useState, useMemo } from 'react';
import Navigation from './navigation';
import Restaurant from './Restaurant/Restaurant';
import Rate from './Rate/Rate';

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);

  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [props.restaurants, activeId]
  );

  const averageRating = (reviews) => {
    const sum = reviews.reduce((acc, cur) => acc + cur.rating, 0);
    return sum / reviews.length;
  };
  console.log('activeRestaurant: ', activeRestaurant);

  return (
    <div>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={setActiveId}
      />

      <div className="max-w-sm rounded overflow-hidden shadow-sm mb-12">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{activeRestaurant.name}</div>
          <div className="text-gray-700 text-base flex">
            <h3 className="text-l">
              Rating: {averageRating(activeRestaurant.reviews).toFixed(2)}
            </h3>
            <Rate
              rating={Math.floor(averageRating(activeRestaurant.reviews))}
            />
          </div>
        </div>
      </div>

      <Restaurant
        menu={activeRestaurant.menu}
        reviews={activeRestaurant.reviews}
      />
    </div>
  );
}
