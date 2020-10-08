import React, { useState } from 'react';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
    const activeRestaurant = props.activeRestaurant;
    let restRating = activeRestaurant.reviews.reduce((sum, item) => {
        return sum += item.rating;
    }, 0);
    restRating = restRating / activeRestaurant.reviews.length;
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
