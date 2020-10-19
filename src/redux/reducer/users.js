import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name, userId } = payload;

      return {
        ...users,
        [userId]: {
          id: userId,
          name,
        },
      };
    default:
      return users;
  }
};
