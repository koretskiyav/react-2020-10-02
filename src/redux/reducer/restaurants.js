import { normalizedRestaurants } from '../../fixtures';
import { SUBMIT } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;
  // console.log('Из reducer restaurants=', action);

  switch (type) {
    case SUBMIT:
      {
        const arrReviews = restaurants[payload.restaurantId].reviews;
        return {
          ...restaurants, [payload.restaurantId]: {
            ...restaurants[payload.restaurantId], reviews: arrReviews.concat(payload.reviewId)
          }
        };
      }
    default:
      return restaurants;
  }
};
