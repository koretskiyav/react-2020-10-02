import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import {
  reviewsByRestaurantIdSelector,
  restaurantByIdSelector,
} from '../../redux/selectors';

const Restaurant = ({
  restaurant: { id, name, menu, reviews },
  reviewsRestaurant,
}) => {
  const averageRating = useMemo(() => {
    const total = reviewsRestaurant.reduce(
      (acc, { rating }) => acc + rating,
      0
    );
    return Math.round(total / reviewsRestaurant.length);
  }, [reviewsRestaurant]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} restaurantId={id} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  reviewsRestaurant: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect((state, ownProps) => ({
  restaurant: restaurantByIdSelector(state, ownProps.id),
  reviewsRestaurant: reviewsByRestaurantIdSelector(state, ownProps.id),
}))(Restaurant);
