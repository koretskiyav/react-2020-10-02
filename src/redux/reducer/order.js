import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  MAKE_ORDER,
  SUCCESS,
  FAILURE,
  REQUEST,
} from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
  response: null,
};

// { [productId]: amount }
export default (state = initialState, action) => {
  const { type, payload, response, error } = action;
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
    case MAKE_ORDER + REQUEST:
      return {
        ...state,
        entities: {
          ...state.entities,
        },
        error: null,
        loading: true,
        response,
      };
    case MAKE_ORDER + SUCCESS:
      const getIds = payload.ids.reduce((acc, el) => ({ ...acc, [el]: 0 }), {});
      return {
        ...state,
        entities: {
          ...state.entities,
          ...getIds,
        },
        loading: false,
        response,
      };
    case MAKE_ORDER + FAILURE:
      return {
        ...state,
        loading: false,
        error: error,
      };
    default:
      return state;
  }
};
