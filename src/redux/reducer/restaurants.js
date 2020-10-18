import { normalizedRestaurants } from '../../fixtures';

// { [restaurantId]: restaurant }

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, resto) => ({ ...acc, [resto.id]: resto }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurants;
  }
};
