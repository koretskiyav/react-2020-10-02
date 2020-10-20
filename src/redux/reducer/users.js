import { normalizedUsers } from '../../fixtures';
import { NEW_USER } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (state = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case NEW_USER:
      return {
        ...state,
        [payload.id]: {
          id: payload.id,
          name: payload.name,
        },
      };

    default:
      return state;
  }
};
