import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, payload, generatedIds } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = payload;
      const { userId: id } = generatedIds;

      return {
        ...users,
        [id]: {
          id,
          name,
        },
      };
    default:
      return users;
  }
};
