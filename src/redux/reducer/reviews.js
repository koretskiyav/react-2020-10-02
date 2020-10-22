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
  loadedRestaurantIds: [],
  loading: false,
  loaded: false,
  error: null,
};
export default (state = initialState, action) => {
  const {
    type,
    payload,
    reviewId,
    userId,
    response,
    restaurantId,
    error,
  } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      return {
        ...state,
        entities: {
          ...state.entities,
          [reviewId]: { id: reviewId, userId, text, rating },
        },
      };
    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case LOAD_REVIEWS + SUCCESS:
      return {
        ...state,
        entities: { ...state.entities, ...arrToMap(response) },
        loadedRestaurantIds: [...state.loadedRestaurantIds, restaurantId],
        loading: false,
        loaded: true,
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return state;
  }
};
