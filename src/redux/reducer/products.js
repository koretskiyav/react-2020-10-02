import produce from 'immer';
import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: {},
};

export default produce((draft = initialState, action) => {
  const { type, payload = {}, response, error } = action;
  const { restaurantId } = payload;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      draft.loading[restaurantId] = true;
      draft.error[restaurantId] = null;
      break;

    case LOAD_PRODUCTS + SUCCESS:
      draft.entities = { ...draft.entities, ...arrToMap(response) };
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = true;
      break;

    case LOAD_PRODUCTS + FAILURE:
      draft.loading[restaurantId] = false;
      draft.loaded[restaurantId] = false;
      draft.error[restaurantId] = error;
      break;

    default:
      return draft;
  }
});
