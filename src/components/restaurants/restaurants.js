import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

import { restaurantsListSelector } from '../../redux/selectors';

const Restaurants = ({ restaurants, match }) => {
  const { restId, tabId = 'menu' } = match.params;

  const restaurant = restaurants.find((restaurant) => restaurant.id === restId);
  let defaultRestId;
  if (!restId) {
    defaultRestId = restaurants[0].id;
  }

  const tabs = restaurants.map(({ id, name }) => ({
    title: name,
    to: `/restaurants/${id}/${tabId}`,
  }));

  return (
    <>
      <Tabs tabs={tabs} />
      {restId && <Restaurant {...restaurant} />}
      {defaultRestId && (
        <Redirect
          exact
          from="/restaurants"
          to={`/restaurants/${defaultRestId}/menu`}
        />
      )}
    </>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
  })
)(Restaurants);
