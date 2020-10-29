import {
  DECREMENT,
  FAILURE,
  INCREMENT,
  REMOVE,
  REQUEST,
  SUCCESS,
  ORDER_ITEMS,
  CLEAR_BASKET,
} from '../constants';

// { [productId]: amount }
const initialState = {
  loading: false,
  error: null,
  entities: {},
  message: '',
};

export default (state = initialState, action) => {
  const { type, payload, error, response } = action;
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
        entities: {
          ...state.entities,
          [payload.id]: 0,
        },
      };
    case ORDER_ITEMS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ORDER_ITEMS + SUCCESS:
      return {
        ...state,
        loading: false,
        message: response,
      };
    case ORDER_ITEMS + FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    case CLEAR_BASKET:
      return {
        ...state,
        entities: initialState.entities,
      };
    default:
      return state;
  }
};
