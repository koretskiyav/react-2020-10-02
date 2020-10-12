import React from 'react';
import Rate from '../Rate';
import PropTypes from 'prop-types';
import style from './reviews.module.css'

export default function Reviews({ rev }) {

    return (
        <div className={style.reviews}>
            <p className={style.reviews__element} data-id="reviews-user">{rev.user}</p>
            <p className={style.reviews__element}>|</p>
            <p className={style.reviews__element} data-id="reviews-text">{rev.text}</p>
            <p className={style.reviews__element}>|</p>
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
