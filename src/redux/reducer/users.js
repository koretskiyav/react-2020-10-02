import { normalizedUsers } from '../../fixtures';


const defaultUser = normalizedUsers.reduce(
  (acc, users) => ({ ...acc, [users.id]: users }),
  {}
);

export default (users = defaultUser, action) => {
  const { type } = action;

  switch (type) {
    default:
      return users;
  }
};