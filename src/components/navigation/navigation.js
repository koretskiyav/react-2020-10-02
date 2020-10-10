import React from 'react';
import styles from './navigation.module.css';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';

const Navigation = ({ restaurants, onRestaurantClick }) => (
  <div className={styles.list}>
    {restaurants.map(({ id, name }) => (
      <span
        key={id}
        className={styles.restaurant}
        onClick={() => onRestaurantClick(id)}
      >
        {name}
      </span>
    ))}
  </div>
);

export default Navigation;

Restaurant.protoTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object),
  onRestaurantClick: PropTypes.func,
};
