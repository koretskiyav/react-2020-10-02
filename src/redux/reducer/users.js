import produce from 'immer';
import {
  ADD_REVIEW,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
};

export default produce((state = initialState, action) => {
  const { type, payload, userId, response, error } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = payload.review;
      state[userId] = { id: userId, name };
      break;
    case LOAD_USERS + REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: null,
      };
    case LOAD_USERS + SUCCESS:
      return {
        ...state,
        entities: { ...arrToMap(response) },
        loading: false,
        loaded: true,
        error: null,
      };
    case LOAD_USERS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return state;
  }
});
