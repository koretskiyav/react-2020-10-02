import {
  ADD_REVIEW,
  LOAD_REVIEWS,
  SUCCESS,
  REQUEST,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
};

export default (state = initialState, action) => {
  const { type, payload, reviewId, userId, response, error } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      return {
        ...state,
        [reviewId]: { id: reviewId, userId, text, rating },
      };
    case LOAD_REVIEWS + REQUEST:
      console.log(1111);
      return {
        ...state,
        [payload.id]: {
          loading: true,
          loaded: false,
          error: null,
        },
      };
    case LOAD_REVIEWS + SUCCESS:
      return {
        ...state,
        entities: { ...state.entities, ...arrToMap(response) },
        [payload.id]: {
          loading: false,
          loaded: true,
          error: null,
        },
      };
    case LOAD_REVIEWS + FAILURE:
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
