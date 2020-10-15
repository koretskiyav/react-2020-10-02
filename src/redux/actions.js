import { INCREMENT, DECREMENT, DEL } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const del = (id) => ({ type: DEL, payload: { id } });
