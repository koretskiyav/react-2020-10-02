import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload, reviewId } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...restaurants,
        [payload.restaurantId]: {
          ...restaurants[payload.restaurantId],
          reviews: restaurants[payload.restaurantId].reviews.concat(reviewId),
        },
      };
    default:
      return restaurants;
  }
};
