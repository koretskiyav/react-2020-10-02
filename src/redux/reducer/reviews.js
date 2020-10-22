import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: {},
};

export default produce((draft = initialState, action) => {
  const { type, payload = {}, reviewId, userId, response, error } = action;
  const { restaurantId } = payload;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      break;

    case LOAD_REVIEWS + REQUEST:
      draft.loading[restaurantId] = true;
      draft.error[restaurantId] = null;
      break;

    case LOAD_REVIEWS + SUCCESS:
      draft.entities = { ...draft.entities, ...arrToMap(response) };
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = true;
      break;

    case LOAD_REVIEWS + FAILURE:
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = false;
      draft.error[restaurantId] = error;
      break;

    default:
      return draft;
  }
});
