import React from 'react';
import Rate from './rate';
import PropTypes from 'prop-types';

export default function Reviews({ rev }) {

    return (
        <div style={{ display: 'flex' }}>
            <p>{rev.user}&nbsp;|&nbsp;</p>
            <p>{rev.text}&nbsp;|&nbsp;</p>
            <p>Оценка посетителя:&nbsp;</p>
            <Rate rate={rev.rating} />
        </div>
    );
}

Reviews.propTypes = {
    rev: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string,
        rating: PropTypes.number.isRequired,
    }).isRequired,
}
