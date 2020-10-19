import { normalizedUsers } from '../../fixtures';
import { SUBMIT } from '../constants';

// { [reviewId]: review }

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);


export default (users = defaultUsers, action) => {
  const { type, payload } = action;
  // console.log('Из reducer users=', action);

  switch (type) {
    case SUBMIT:
      return { ...users, [payload.userId]: { id: payload.userId, name: payload.name } };
    default:
      return users;
  }
};
