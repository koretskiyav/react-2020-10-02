import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { restaurantByIdSelector } from '../../redux/selectors';
import { avgRaitingSelector } from '../../redux/selectors';
import { RestaurantContext } from '../../context';

const Restaurant = ({ restaurantId, restaurant, avgRating }) => {
  const { name, menu, reviews } = restaurant;

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    { title: 'Reviews', content: <Reviews reviewIds={reviews} /> },
  ];

  return (
    <div>
      <RestaurantContext.Provider value={restaurantId}>
        <Banner heading={name}>
          <Rate value={avgRating} />
        </Banner>
        <Tabs tabs={tabs} />
      </RestaurantContext.Provider>
    </div>
  );
};

Restaurant.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: restaurantByIdSelector(state, ownProps.restaurantId),
    avgRating: avgRaitingSelector(
      state,
      restaurantByIdSelector(state, ownProps.restaurantId).reviews
    ),
  };
};

export default connect(mapStateToProps)(Restaurant);
