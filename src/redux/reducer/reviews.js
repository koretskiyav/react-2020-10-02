import { ADD_REVIEW, LOAD_REVIEWS, SUCCESS } from '../constants';
import { arrToMap } from '../utils';
import produce from 'immer';
const initialState = {
  entities: {},
};
export default (state = initialState, action) => {
  const { type, payload, reviewId, userId, response } = action;

  switch (type) {
    case LOAD_REVIEWS + SUCCESS:
      return produce(state, (draft) => {
        const reviews = arrToMap(response, (review) => ({ ...review }));
        draft.entities = { ...state.entities, ...reviews };
      });
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      return produce(state, (draft) => {
        draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      });
    default:
      return state;
  }
};
