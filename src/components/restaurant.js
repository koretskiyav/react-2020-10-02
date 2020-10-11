import React, { useMemo } from 'react';
import Reviews from './reviews';
import Rate from './rate';
import PropTypes from 'prop-types';

export default function Restaurant({ activeRestaurant }) {

    const restRating = Math.floor((useMemo(() => activeRestaurant.reviews.reduce((sum, item) => {
        return sum += item.rating;
    }, 0), [activeRestaurant.reviews]) / activeRestaurant.reviews.length) * 10) / 10;

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

Restaurant.propTypes = {
    activeRestaurant: PropTypes.object(PropTypes.shape({
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
                rating: PropTypes.number.isRequired,
                id: PropTypes.string.isRequired,
            })
        ).isRequired,
    })).isRequired,
}

  // Menu.propTypes = {
  //   menu: PropTypes.arrayOf(PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //   }).isRequired).isRequired,
  // }
