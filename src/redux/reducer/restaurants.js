import { normalizedRestaurants } from '../../fixtures';
import { CREATEREVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATEREVIEW:
      const { reviewIdGenerated: reviewId, restaurantId } = payload;

      return {
        ...restaurants,
        [restaurantId]: {
          ...restaurants[restaurantId],
          reviews: [...restaurants[restaurantId].reviews, reviewId],
        },
      };
    default:
      return restaurants;
  }
};
