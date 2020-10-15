import { DECREMENT, INCREMENT, REMOVING, CLEAR } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: state[payload.id] > 0 ? (state[payload.id] || 0) - 1 : 0,
      };
    case REMOVING:
      return { ...state, [payload.id]: (state[payload.id] = 0) };
    case CLEAR:
      return (state = {});
    default:
      return state;
  }
};
