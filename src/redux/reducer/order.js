import { DECREMENT, INCREMENT, CANCEL_PRODUCT } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: {
          amount: state[payload.id] ? (state[payload.id].amount || 0) + 1 : 1,
          price: payload.price,
          name: payload.name,
        },
      };
    case DECREMENT:
      if (state[payload.id] && state[payload.id].amount > 1) {
        return {
          ...state,
          [payload.id]: {
            amount: state[payload.id] ? (state[payload.id].amount || 0) - 1 : 1,
            price: payload.price,
            name: payload.name,
          },
        };
      } else if (state[payload.id]) {
        const newState = Object.keys(state)
          .filter((key) => key !== payload.id)
          .reduce((res, key) => {
            res[key] = state[key];
            return res;
          }, {});
        return newState;
      } else return state;
    case CANCEL_PRODUCT:
      const newState = Object.keys(state)
        .filter((key) => key !== payload.id)
        .reduce((res, key) => {
          res[key] = state[key];
          return res;
        }, {});
      return newState;
    default:
      return state;
  }
};
