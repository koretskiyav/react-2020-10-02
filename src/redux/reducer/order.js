import {
  DECREMENT,
  FAILURE,
  INCREMENT,
  PLACE_ORDER,
  REMOVE,
  REQUEST,
  SUCCESS,
} from '../constants';
const defaultState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};
export default (state = defaultState, action) => {
  const { type, payload, error } = action;
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
    case PLACE_ORDER + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case PLACE_ORDER + SUCCESS:
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: true,
        error: null,
      };
    case PLACE_ORDER + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error,
      };
    default:
      return state;
  }
};
