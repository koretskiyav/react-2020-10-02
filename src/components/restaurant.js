import React, { useState, useMemo } from 'react';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
    const activeRestaurant = props.activeRestaurant;
    // let restRating = activeRestaurant.reviews.reduce((sum, item) => {
    //     return sum += item.rating;
    // }, 0);

    const restRating = useMemo(() => activeRestaurant.reviews.reduce((sum, item) => {
        return sum += item.rating;
    }, 0), activeRestaurant.reviews) / activeRestaurant.reviews.length;

    // const activeRestaurant = useMemo(
    //     () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    //     [props.restaurants, activeId]
    //   );


    // restRating /= activeRestaurant.reviews.length;
    return (
        <div>
            <div>Рейтинг ресторана: <Rate rate={restRating} /></div>
            {activeRestaurant.reviews.map(element => {
                return <Reviews key={element.id} rev={element}
                />
            }
            )}
        </div>
    );
}
