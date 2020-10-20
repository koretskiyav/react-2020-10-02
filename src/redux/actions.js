import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  SENDREVIEW,
  NEW_USER,
  NEW_REVIEW,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const sendReview = (restId, userName, text, rating) => ({
  type: SENDREVIEW,
  payload: { restId, userName, text, rating },
});
export const newUser = (userId, userName) => ({
  type: NEW_USER,
  payload: { userId, userName },
});
export const newReview = (id, userId, text, rating) => ({
  type: NEW_REVIEW,
  payload: { id, userId, text, rating },
});
