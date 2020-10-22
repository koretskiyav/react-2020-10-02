import produce from 'immer';
import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return produce(state, (draft) => {
        draft[payload.id] = (state[payload.id] || 0) + 1;
      });
    case DECREMENT:
      return produce(state, (draft) => {
        draft[payload.id] = Math.max((state[payload.id] || 0) - 1, 0);
      });
    case REMOVE:
      return produce(state, (draft) => {
        draft[payload.id] = 0;
      });
    default:
      return state;
  }
};
