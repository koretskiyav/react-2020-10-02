import { INCREMENT, DECREMENT, REMOVING, CLEAR } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const removing = (id) => ({ type: REMOVING, payload: { id } });
export const clear = () => ({ type: CLEAR, payload: {} });
