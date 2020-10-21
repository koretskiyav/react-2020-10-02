import { LOAD_MENU, FAILURE, REQUEST, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  loadedId: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, response, error, restaurantId } = action;

  switch (type) {
    case LOAD_MENU + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_MENU + SUCCESS:
      return {
        ...state,
        entities: { ...state.entities, ...arrToMap(response) },
        loading: false,
        loaded: true,
        loadedId: { ...state.loadedId, [restaurantId]: true },
      };
    case LOAD_MENU + FAILURE:
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
