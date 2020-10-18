import { createSelector } from 'reselect';

export const usersSelector = (state) => state.users;
export const reviewsSelector = (state) => state.reviews;
export const restaurantsSelector = (state) => state.restaurants;
export const orderSelector = (state) => state.order;
export const productsSelector = (state) => state.products;

// [...items] => { [itemId]: item }
// const getMapSelector = (listSelector) =>
//   createSelector(listSelector, (list) =>
//     list.reduce((acc, item) => ({ ...acc, [item.id]: item }), {})
//   );

// export const usersMapSelector = getMapSelector(usersSelector);
// export const reviewsMapSelector = getMapSelector(reviewsSelector);
// export const restaurantsMapSelector = getMapSelector(restaurantsSelector);

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
