import { INCREMENT, DECREMENT, DELETE_ITEM } from './constants';

export const increment = (id, name, price) => ({
  type: INCREMENT,
  payload: { id, name, price },
});
export const decrement = (id, name, price) => ({
  type: DECREMENT,
  payload: { id, name, price },
});
export const deleteItem = (id) => ({ type: DELETE_ITEM, payload: { id } });
