import { createSelector } from 'reselect';
import { getById } from './utils';

const restaurantsSelector = (state) => state.restaurants.entities;
const productsSelector = (state) => state.products.entities;
const orderSelector = (state) => state.order;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;
export const restaurantsErrorSelector = (state) => state.restaurants.error;
export const productsLoadingSelector = (state) => state.products.loading;
export const productsLoadedSelector = (state) => state.products.loaded;
export const productsErrorSelector = (state) => state.products.error;

export const productsLoadingByRestaurantSelector = getById(
  productsLoadingSelector,
  'restaurantId'
);

export const productsLoadedByRestaurantSelector = getById(
  productsLoadedSelector,
  'restaurantId'
);

export const productsErrorByRestaurantSelector = getById(
  productsErrorSelector,
  'restaurantId'
);

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

const reviewsSelector = (state) => state.reviews.entities;
export const usersSelector = (state) => state.users.entities;

export const reviewsLoadingSelector = (state) => state.reviews.loading;
export const reviewsLoadedSelector = (state) => state.reviews.loaded;
export const reviewsErrorSelector = (state) => state.reviews.error;
export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;
export const usersErrorSelector = (state) => state.users.error;

export const reviewsLoadingByRestaurantSelector = getById(
  reviewsLoadingSelector,
  'restaurantId'
);

export const reviewsLoadedByRestaurantSelector = getById(
  reviewsLoadedSelector,
  'restaurantId'
);

export const reviewsErrorByRestaurantSelector = getById(
  reviewsErrorSelector,
  'restaurantId'
);

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const productAmountSelector = getById(orderSelector, undefined, 0);
export const restaurantSelector = getById(restaurantsSelector);
export const productSelector = getById(productsSelector);
const reviewSelector = getById(reviewsSelector);

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: users[review.userId]?.name,
  })
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  (_, { reviews }) => reviews,
  (reviews, ids) => {
    const ratings = ids.map((id) => reviews[id].rating);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
);
