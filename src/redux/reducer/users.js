import { normalizedUsers } from '../../fixtures';
import { CREATEREVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

const createUser = (users, id, name) => {
  return { ...users, [id]: { id, name } };
};

export default (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATEREVIEW:
      const { userIdGenerated: id, name } = payload;

      return createUser(users, id, name);
    default:
      return users;
  }
};
