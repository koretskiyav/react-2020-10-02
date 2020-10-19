import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW, ADD_REVIEW_SYNC } from '../constants';

// { [restaurantId]: restaurant }

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, resto) => ({ ...acc, [resto.id]: resto }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...restaurants,
        [payload.restaurantId]: {
          ...restaurants[payload.restaurantId],
          reviews: [
            ...restaurants[payload.restaurantId].reviews,
            payload.reviewId,
          ],
        },
      };

    case ADD_REVIEW_SYNC:
      return {
        ...restaurants,
        [payload.restaurantId]: {
          ...restaurants[payload.restaurantId],
          reviews: [
            ...restaurants[payload.restaurantId].reviews,
            payload.review.id,
          ],
        },
      };

    default:
      return restaurants;
  }
};
