import { DECREMENT, INCREMENT, REMOVEPRODUCT } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      return state[payload.id] && state[payload.id] > 1
        ? { ...state, [payload.id]: state[payload.id] - 1 }
        : removeProduct(state, payload.id);
    case REMOVEPRODUCT:
      return removeProduct(state, payload.id);
    default:
      return state;
  }
};

const removeProduct = (state, key) => {
  const obj = Object.assign({}, { ...state });
  delete obj[key];
  return obj;
};
