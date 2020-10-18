import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) => {
    return Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }));
  }
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const restaurantsToArraySelector = createSelector(
  restaurantsSelector,
  (restaurants) => Object.keys(restaurants).map((id) => restaurants[id])
);

export const restaurantByIdSelector = createSelector(
  restaurantsSelector,
  (_, restaurantId) => restaurantId,
  (restaurants, restaurantId) => restaurants[restaurantId]
);

export const reviewsByRestaurantIdSelector = createSelector(
  restaurantByIdSelector,
  reviewsSelector,
  (restaurantById, reviews) => restaurantById.reviews.map((id) => reviews[id])
);

export const reviewByIdSelector = createSelector(
  reviewsSelector,
  (_, id) => id,
  (reviews, id) => reviews[id]
);

export const userByIdSelector = createSelector(
  usersSelector,
  reviewsSelector,
  (_, id) => id,
  (users, reviews, id) => users[reviews[id]['userId']]
);
