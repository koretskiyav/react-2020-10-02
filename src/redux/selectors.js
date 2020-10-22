import { createSelector } from 'reselect';
import { getById } from './utils';

const restaurantsSelector = (state) => state.restaurants.entities;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products.entities;
const reviewsSelector = (state) => state.reviews.entities;
const usersSelector = (state) => state.users.entities;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const restaurantLoadingProductsSelector = (state, props) =>
  state.restaurants.entities[props.restaurantId].loadingProducts;
export const restaurantLoadedProductsSelector = (state, props) =>
  state.restaurants.entities[props.restaurantId].loadedProducts;

export const restaurantLoadingReviewsSelector = (state, props) =>
  state.restaurants.entities[props.restaurantId].loadingReviews;
export const restaurantLoadedReviewsSelector = (state, props) =>
  state.restaurants.entities[props.restaurantId].loadedReviews;

export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;

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

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);
export const productsListSelector = createSelector(
  productsSelector,
  Object.keys
);
export const reviewsListSelector = createSelector(reviewsSelector, Object.keys);
const restaurantSelector = createSelector(
  restaurantsSelector,
  (_, props) => props.restaurantId,
  (restaurants, restaurantId) => restaurants[restaurantId]
);
export const productsListRestaurantSelector = createSelector(
  productsListSelector,
  restaurantSelector,
  (products, restaurant) => {
    return products.filter((product) => restaurant.menu.includes(product));
  }
);
export const reviewsListRestaurantSelector = createSelector(
  reviewsListSelector,
  restaurantSelector,
  (reviews, restaurant) => {
    return reviews.filter((review) => restaurant.reviews.includes(review));
  }
);

export const productAmountSelector = getById(orderSelector, 0);
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
