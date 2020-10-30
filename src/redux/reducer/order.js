import produce from 'immer';
import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  CREATE_ORDER,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  error: '',
  waiting: false,
  entities: {},
};
// { [productId]: amount }
export default produce((draft = initialState, action) => {
  const { type, payload, response } = action;
  switch (type) {
    case INCREMENT:
      draft.entities[payload.id] = (draft.entities[payload.id] || 0) + 1;
      break;
    case DECREMENT:
      draft.entities[payload.id] = Math.max(
        (draft.entities[payload.id] || 0) - 1,
        0
      );
      break;
    case REMOVE:
      draft.entities[payload.id] = 0;
      break;
    case CREATE_ORDER + REQUEST:
      draft.waiting = true;
      draft.error = '';
      break;
    case CREATE_ORDER + SUCCESS:
      draft.entities = {};
      draft.waiting = false;
      draft.error = '';
      break;
    case CREATE_ORDER + FAILURE:
      draft.waiting = false;
      draft.error = response;
      break;
    default:
      return draft;
  }
});
