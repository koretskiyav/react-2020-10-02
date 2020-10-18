import { normalizedUsers } from '../../fixtures';
import { CREATE_USER } from '../constants';

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

    default:
      return users;
  }
};
