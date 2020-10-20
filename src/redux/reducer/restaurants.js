//import { normalizedRestaurants as defaultRestaurants } from '../../fixtures';
import { normalizedRestaurants } from '../../fixtures';
//import { SENDREVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurants;
  }
};
