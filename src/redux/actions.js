import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  CREATE_REVIEW,
  CREATE_USER,
} from './constants';

import { usersSelector } from './selectors';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });

export const createReview = ({ userId, text, rate }) => ({
  type: CREATE_REVIEW,
  meta: { uuid: 'id' },
  payload: { userId, text, rate },
});

export const createUser = (name) => ({
  type: CREATE_USER,
  meta: { uuid: 'id' },
  payload: { name },
});

export const addReview = ({ name, text, rate }) => (dispatch, getState) => {
  const users = usersSelector(getState());
  const user = Object.values(users).find((item) => item.name === name);
  const userId = user ? user.id : dispatch(createUser(name));

  dispatch(createReview({ userId, text, rate }));
};
