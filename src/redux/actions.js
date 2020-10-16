import { INCREMENT, DECREMENT, CANCEL_PRODUCT } from './constants';

export const increment = (id, price, name) => ({
  type: INCREMENT,
  payload: { id, price, name },
});
export const decrement = (id, price, name) => ({
  type: DECREMENT,
  payload: { id, price, name },
});

export const cancelProduct = (id) => ({
  type: CANCEL_PRODUCT,
  payload: { id },
});
