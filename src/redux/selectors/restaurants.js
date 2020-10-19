import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const restaurantsSelector = (state) => state.restaurants;

export const mainRestaurantsSelector = createSelector(
  restaurantsSelector,
  (restaurants) =>
    Object.values(restaurants).map((restaurant) => ({
      name: restaurant.name,
      id: restaurant.id,
    }))
);

export const restaurantByIdSelector = (state, id) => {
  return createSelector(restaurantsSelector, (restaurants) => {
    return restaurants[id];
  })(state);
};
