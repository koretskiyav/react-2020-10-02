import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  PUBLISH,
  NEW_USER,
  NEW_REVIEW,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const publish = (id, reviewId, values) => ({
  type: PUBLISH,
  payload: { id, reviewId, values },
});
export const newUser = (id, name) => ({
  type: NEW_USER,
  payload: { name, id },
});
export const newReview = (id, userId, text, rating) => ({
  type: NEW_REVIEW,
  payload: { id, userId, text, rating },
});
