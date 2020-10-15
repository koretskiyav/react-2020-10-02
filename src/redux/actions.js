import { INCREMENT, DECREMENT, REMOVEPRODUCT } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const removeProduct = (id) => ({ type: REMOVEPRODUCT, payload: { id } });
