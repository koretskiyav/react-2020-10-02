import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_PRODUCTS,
  LOAD_USERS,
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
export default produce((draft = initialState, action) => {
  const { type, payload, userId, response, restaurantId, error } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = payload.review;
      draft.entities[userId] = { id: userId, name };
      break;
    case LOAD_USERS + REQUEST:
      draft.loading = true;
      draft.loaded = false;
      break;
    case LOAD_USERS + SUCCESS:
      draft.loadedRestaurantIds.push(restaurantId);
      Object.assign(draft.entities, arrToMap(response));
      draft.loaded = true;
      draft.loading = false;
      break;
    case LOAD_PRODUCTS + FAILURE:
      draft.loaded = false;
      draft.loading = false;
      draft.error = error;
      break;
    default:
      return draft;
  }
});
