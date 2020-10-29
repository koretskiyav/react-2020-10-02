import produce from 'immer';
import {
  SEND_ORDER,
  REQUEST,
  SUCCESS,
  FAILURE,
  DECREMENT,
  INCREMENT,
  REMOVE,
} from '../constants';

const initialState = {
  sending: false,
  sended: false,
  error: null,
  entities: {},
};

// { [productId]: amount }
export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload, error } = action;

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

      case SEND_ORDER + REQUEST: {
        draft.sending = true;
        draft.sended = false;
        draft.error = null;
        break;
      }

      case SEND_ORDER + SUCCESS: {
        draft.sending = false;
        draft.sended = true;
        draft.entities = {};
        break;
      }

      case SEND_ORDER + FAILURE: {
        draft.sending = false;
        draft.error = error;
        break;
      }

      default:
        return;
    }
  });
