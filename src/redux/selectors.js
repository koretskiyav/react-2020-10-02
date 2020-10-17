import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const restaurantsSelector = (state) => state.restaurants;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

export const restaurantById = (state, { restaurantId }) =>
  restaurantsSelector(state)[restaurantId];
export const reviewById = (state, { reviewId }) =>
  reviewsSelector(state)[reviewId];
export const userById = (state, { userId }) => usersSelector(state)[userId];

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
