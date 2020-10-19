import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  CREATE_REVIEW,
  CREATE_USER,
  ADD_REVIEW,
  ADD_REVIEW_SYNC,
} from './constants';

import { usersSelector } from './selectors';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });

export const createReview = ({ userId, text, rating }) => ({
  type: CREATE_REVIEW,
  meta: { uuid: 'id' },
  payload: { userId, text, rating },
});

export const createUser = (name) => ({
  type: CREATE_USER,
  meta: { uuid: 'id' },
  payload: { name },
});

export const addReview = ({ restaurantId, reviewId }) => ({
  type: ADD_REVIEW,
  payload: { restaurantId, reviewId },
});

export const submitReview = (restaurantId, { name, text, rate }) => (
  dispatch,
  getState
) => {
  const users = usersSelector(getState());
  const user = Object.values(users).find((item) => item.name === name);
  const userId = user ? user.id : dispatch(createUser(name));
  const reviewId = dispatch(createReview({ userId, text, rating: rate }));
  dispatch(addReview({ restaurantId, reviewId }));
};

export const submitReviewSync = (restaurantId, { name, text, rate }) => ({
  type: ADD_REVIEW_SYNC,
  meta: { reviewUuider: true },
  payload: { restaurantId, review: { text, rating: rate }, user: { name } },
});
