import produce from 'immer';
import {
  DECREMENT,
  FAILURE,
  INCREMENT,
  PUSH_ORDER,
  REMOVE,
  REQUEST,
  SUCCESS,
} from '../constants';

const initialState = {
  pushing: false,
  pushed: false,
  error: null,
  entities: {},
};

const isAnyProduct = (entities) =>
  !!Object.values(entities).find((val) => val !== 0);

// { [productId]: amount }
export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload, error } = action;
    switch (type) {
      case INCREMENT:
        draft.entities[payload.id] = (draft.entities[payload.id] || 0) + 1;
        draft.pushed = false;
        break;
      case DECREMENT:
        draft.entities[payload.id] = Math.max(
          (draft.entities[payload.id] || 0) - 1,
          0
        );
        draft.pushed = !isAnyProduct(draft.entities);
        break;
      case REMOVE:
        draft.entities[payload.id] = 0;
        draft.pushed = !isAnyProduct(draft.entities);
        break;
      case PUSH_ORDER + REQUEST:
        draft.pushing = true;
        draft.error = null;
        break;
      case PUSH_ORDER + SUCCESS:
        draft.pushing = false;
        draft.pushed = true;
        draft.entities = {};
        break;
      case PUSH_ORDER + FAILURE:
        draft.pushing = false;
        draft.error = error;
        break;
      default:
        return;
    }
  });
