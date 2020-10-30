import {
  FAILURE,
  POST_ORDER,
  REQUEST,
  SUCCESS,
  CLEAR_ORDER,
  CLEAR_ERROR,
} from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case POST_ORDER + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_ORDER + SUCCESS:
      return {
        ...state,
        entities: response,
        loading: false,
        loaded: true,
      };
    case POST_ORDER + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    case CLEAR_ORDER:
      return {
        entities: {},
        loading: false,
        loaded: false,
        error: null,
      };
    case CLEAR_ERROR:
      return {
        entities: {},
        loading: false,
        loaded: false,
        error: null,
      };
    default:
      return state;
  }
};
