import { normalizedUsers } from '../../fixtures';
import { CREATE_USER, ADD_REVIEW_SYNC } from '../constants';

// { [userId]: user }

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER:
      return {
        ...users,
        [payload.id]: payload,
      };

    case ADD_REVIEW_SYNC:
      return {
        ...users,
        [payload.user.id]: payload.user,
      };

    default:
      return users;
  }
};
