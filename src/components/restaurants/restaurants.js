import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { restaurantsToArraySelector } from '../../redux/selectors';

const Restaurants = ({ restaurants }) => {
  const tabs = restaurants.map((restaurant) => ({
    title: restaurant.name,
    content: <Restaurant id={restaurant.id} />,
  }));

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default connect((state) => ({
  restaurants: restaurantsToArraySelector(state),
}))(Restaurants);
