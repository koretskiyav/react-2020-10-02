import { createSelector } from 'reselect';
import { getById } from './utils';

const restaurantsSelector = (state) => {
  return state.restaurants.entities;
};
const productsSelector = (state) => state.products.entities;
const reviewsSelector = (state) => state.reviews.entities;
const usersSelector = (state) => state.users.entities;

const orderSelector = (state) => state.order;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const productsLoadingSelector = (state, props) =>
  state.products.loading[props.match.params.id];
export const productsLoadedSelector = (state, props) => {
  return state.products.loaded[props.match.params.id];
};
export const reviewsLoadingSelector = (state, props) => {
  return state.reviews.loading[props.match.params.id];
};
export const reviewsLoadedSelector = (state, props) => {
  return state.reviews.loaded[props.match.params.id];
};

export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;

const restaurantsProductSelector = createSelector(
  restaurantsSelector,
  (restaurants) => {
    const resturantProducts = Object.values(restaurants).reduce((acc, i) => {
      const temp = i.menu.reduce((ac, ii) => {
        return { [ii]: i.id, ...ac };
      }, {});
      return { ...temp, ...acc };
    }, {});

    return resturantProducts;
  }
);

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  restaurantsProductSelector,
  (products, order, restaurantProducts) => {
    return Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
        id: restaurantProducts[product.id],
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

export const productAmountSelector = getById(orderSelector, 0);
export const productSelector = getById(productsSelector);
const reviewSelector = getById(reviewsSelector);
const restaurantSelector = getById(restaurantsSelector, {}, 'match.params.id');

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
    const ratings = ids.map((id) => reviews[id]?.rating || 0);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
);

export const restaurantMenuSelector = createSelector(
  restaurantSelector,
  (restaurant) => {
    return restaurant.menu ? restaurant.menu : [];
  }
);

export const restaurantReviewsSelector = createSelector(
  restaurantSelector,
  (restaurant) => {
    return restaurant.reviews ? restaurant.reviews : [];
  }
);
