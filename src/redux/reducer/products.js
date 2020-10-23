import produce from 'immer';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
};

export default (state = initialState, action) => {
  const { type, payload, response, error } = action;
  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        [payload.id]: {
          loading: true,
          loaded: false,
          error: null,
        },
      };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        entities: { ...state.entities, ...arrToMap(response) },
        [payload.id]: {
          loading: false,
          loaded: true,
          error: null,
        },
      };
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        [payload.id]: {
          loading: false,
          loaded: false,
          error,
        },
      };
    default:
      return state;
  }
};
