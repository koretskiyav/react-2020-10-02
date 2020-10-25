import produce from 'immer';
import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = {}, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;

    switch (type) {
      case INCREMENT:
        draft[payload.id] = {
          count: draft[payload.id] != null ? draft[payload.id].count + 1 : 1,
          restaurantId: payload.restaurantId,
        };
        break;

      case DECREMENT:
        if (draft[payload.id] != null && draft[payload.id].count > 1) {
          draft[payload.id] = {
            count: draft[payload.id].count - 1,
            restaurantId: payload.restaurantId,
          };
        } else {
          delete draft[payload.id];
        }
        break;

      case REMOVE:
        delete draft[payload.id];
        break;

      default:
        return state;
    }
  });
