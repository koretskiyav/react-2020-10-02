import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';
import Reviews from './reviews';
import Rate from './rate';
import s from './restaurants.css';

function averageRating(restaurant) {
  const restaurantRatings = restaurant.reviews.map((review) => review.rating);
  const sum = restaurantRatings.reduce((a, b) => a + b, 0);
  const averageRating = sum / restaurantRatings.length;
  return Math.floor(averageRating * 10) / 10;
}

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);

  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [props.restaurants, activeId]
  );

  return (
    <div className={s.restaurants} style={{ margin: '10px 20px' }}>
      <Navigation
        restaurants={props.restaurants}
        onRestaurantClick={setActiveId}
      />
      <div className="restaurant" style={{ margin: '30px 0' }}>
        <div className={s['restaurant-rating']}>
          {activeRestaurant.name}'s rating:{' '}
          <Rate rate={averageRating(activeRestaurant)}></Rate>
        </div>
        <Menu menu={activeRestaurant.menu} />
        <Reviews reviews={activeRestaurant.reviews} />
      </div>
    </div>
  );
}
