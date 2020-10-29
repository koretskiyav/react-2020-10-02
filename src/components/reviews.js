import React from 'react';
import Rate from './rate';

export default function Reviews(props) {

    return (
        <div>
            {props.reviews.map((reviews) => (
                <Rate key={reviews.id} raiting={raiting} user={user} text={text} />
            ))}
        </div>
    );
}