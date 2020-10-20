import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  console.log('RRRRRRRRR restaurants: ', restaurants);
  const keys = Object.keys(restaurants);
  //console.log('restaurants keys: ', keys);
  //keys.map( key => console.log(restaurants[key].name))
  //const tabs = restaurants.map((restaurant) => ({
  const tabs = keys.map((key) => ({
    title: restaurants[key].name,
    content: <Restaurant id={key} />,
  }));
  //console.log('TTTTTTTTTTT Tabs: ', tabs);
  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect((state) => ({
  restaurants: state.restaurants,
}))(Restaurants);
