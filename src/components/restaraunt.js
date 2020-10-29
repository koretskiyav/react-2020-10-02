import React from 'react';
import Menu from './menu';
import Rait from './rate'
import Reviews from './reviews';

export default function Restaraunt(props) {

    const midRait = props.raiting / props.reviews;

    return (
        <div>
            <Menu menu={activeRestaurant.menu} />
            <Reviews />
            {midRait.map(() => (
                <Rait />
            ))}
        </div>
    )
} 