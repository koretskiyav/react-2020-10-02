import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, payload, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...users,
        [userId]: { name: payload.review.name, id: userId },
      };
    default:
      return users;
  }
};
