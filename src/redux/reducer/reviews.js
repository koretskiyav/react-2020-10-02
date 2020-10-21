import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload, reviewId, userId, response, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST: {
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
    case LOAD_REVIEWS + SUCCESS: {
      const { restaurantId } = payload;
      return {
        ...state,
        entities: { ...state.entities, ...arrToMap(response) },
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
    case LOAD_REVIEWS + FAILURE: {
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
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      return {
        ...state,
        entities: {
          ...state.entities,
          [reviewId]: { id: reviewId, userId, text, rating },
        },
      };
    default:
      return state;
  }
};
