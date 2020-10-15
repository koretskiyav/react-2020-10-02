import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      return state[payload.id] > 0
        ? { ...state, [payload.id]: state[payload.id] - 1 }
        : state;
    case REMOVE:
      return state[payload.id] > 0 ? { ...state, [payload.id]: 0 } : state;
    default:
      return state;
  }
};
