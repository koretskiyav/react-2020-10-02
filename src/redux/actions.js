import { INCREMENT, DECREMENT, REMOVE, ADD_REVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });
export const add_review = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  reviewId: true,
  userId: true,
});
