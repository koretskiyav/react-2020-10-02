import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

export const getReview = (state, reviewId) => {
  const review = reviewsSelector(state)[reviewId];
  const user = usersSelector(state)[review.userId];
  return { user: user.name, text: review.text, rating: review.rating };
};

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

//Не нашел, как сделать мемоизацию с входным параметром, чтобы мемоизация корректно сохранялась, просьба рассмотреть на занятии
export const reviewsTotalSelector = (state, restaurantId) => {
  const reviews = restaurantsSelector(state)[restaurantId].reviews;
  const total = reviews
    .map((reviewId) => reviewsSelector(state)[reviewId])
    .reduce((acc, { rating }) => acc + rating, 0);
  return Math.round(total / reviews.length);
};
