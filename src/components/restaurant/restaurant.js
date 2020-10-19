import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { reviewsTotalSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating }) => {
  const { name, menu, reviews } = restaurant;

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} restaurantId={restaurant.id} />,
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
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default connect((state, ownProps) => ({
  restaurant: state.restaurants[ownProps.id],
  averageRating: reviewsTotalSelector(state, ownProps.id),
}))(Restaurant);
