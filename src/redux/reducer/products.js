import { arrToMap } from '../utils';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, response, error, payload } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST: {
      const { restaurantId } = payload;
      return {
        ...state,
        state: true,
        loading: {
          ...state.loading,
          [restaurantId]: true,
        },
        error: null,
      };
    }
    case LOAD_PRODUCTS + SUCCESS: {
      const { restaurantId } = payload;
      return {
        ...state,
        entities: arrToMap(response),
        loading: {
          ...state.loading,
          [restaurantId]: false,
        },
        loaded: {
          ...state.loaded,
          [restaurantId]: true,
        },
      };
    }
    case LOAD_PRODUCTS + FAILURE: {
      const { restaurantId } = payload;
      return {
        ...state,
        loading: {
          ...state.loading,
          [restaurantId]: false,
        },
        loaded: {
          ...state.loaded,
          [restaurantId]: false,
        },
        error,
      };
    }
    default:
      return state;
  }
};
