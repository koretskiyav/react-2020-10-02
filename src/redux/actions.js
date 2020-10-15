import { INCREMENT, DECREMENT, REMOVE, LOAD, INIT_PRODUCTS } from './constants';

export const load = () => ({ type: LOAD });
export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const init_products = (restaurants) => ({
  type: INIT_PRODUCTS,
  payload: { restaurants },
});
