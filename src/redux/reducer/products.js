import { INIT_PRODUCTS } from '../constants';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INIT_PRODUCTS:
      const { restaurants } = payload;
      const products = {};
      restaurants.forEach((restaurant) => {
        restaurant.menu.forEach((product) => {
          products[product.id] = {
            name: product.name,
            price: product.price,
          };
        });
      });
      return { ...state, ...products };
    default:
      return state;
  }
};
