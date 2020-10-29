import React from 'react';

export default function Rate(props) {

    return (
        <div>
            <p>{props.raiting}</p>
            <p>{props.user}</p>
            <p>{props.text}</p>
        </div>
    )
}

