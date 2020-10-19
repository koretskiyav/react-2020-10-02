import { createSelector } from 'reselect';

export const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;

export const reviewSelector = ({ reviews }, id) => reviews[id];
export const userSelector = ({ users }, id) => users[id];

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

export const restaurantReviewsSelector = createSelector(
  reviewsSelector,
  (_, { restaurant }) => restaurant.reviews,
  (reviews, reviewsIds) => {
    return reviewsIds.map((id) => reviews[id]);
  }
);

export const restaurantAverageRatingSelector = createSelector(
  restaurantReviewsSelector,
  (reviews) => {
    return Math.round(
      Object.values(reviews).reduce((acc, { rating }) => acc + rating, 0) /
        Object.keys(reviews).length
    );
  }
);
