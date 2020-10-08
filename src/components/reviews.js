import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
    // console.log(props);
    // console.log('countRateProps=', props.countRateProps);
    // const arrF = () => props.setCountRateProps(props.countRateProps);
    return (
        <div style={{ display: 'flex' }}>
            <p>{props.rev.user}&nbsp;|&nbsp;</p>
            <p>{props.rev.text}&nbsp;|&nbsp;</p>
            <p>Оценка посетителя:&nbsp;</p>
            <Rate rate={props.rev.rating} />
        </div>
    );
}