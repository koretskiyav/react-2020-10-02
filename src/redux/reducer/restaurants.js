import { normalizedRestaurants } from '../../fixtures';
import { PUBLISH } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;
  switch (type) {
    case PUBLISH:
      if (payload.id && payload.reviewId) {
        const newReviews = [
          ...restaurants[payload.id].reviews,
          payload.reviewId,
        ];
        const newRestaurant = {
          ...restaurants[payload.id],
          reviews: newReviews,
        };
        return { ...restaurants, [payload.id]: newRestaurant };
      } else return restaurants;
    default:
      return restaurants;
  }
};
