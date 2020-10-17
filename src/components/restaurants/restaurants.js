import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  const tabs = Object.values(restaurants).map(({ id, name }) => ({
    title: name,
    content: <Restaurant restaurantId={id} />,
  }));

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.shape({
    byId: PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default connect((state) => ({
  restaurants: state.restaurants,
}))(Restaurants);
