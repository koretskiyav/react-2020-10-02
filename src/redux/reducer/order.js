import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  SUCCESS,
  REQUEST,
  FAILURE,
  POST_CHECKOUT,
} from '../constants';

// { [productId]: amount }
export default (state = { entities: {}, loading: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: (state.entities[payload.id] || 0) + 1,
        },
      };
    case DECREMENT:
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.id]: Math.max((state.entities[payload.id] || 0) - 1, 0),
        },
      };
    case REMOVE:
      return {
        ...state,
        entities: { ...state.entities, [payload.id]: 0 },
      };
    case POST_CHECKOUT + REQUEST:
      return { ...state, sending: true };
    case POST_CHECKOUT + SUCCESS:
      return { entities: {}, sending: false };
    case POST_CHECKOUT + FAILURE:
      return { ...state, sending: false };
    default:
      return state;
  }
};
