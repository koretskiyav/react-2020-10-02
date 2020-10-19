import { createSelector } from 'reselect';

const usersSelector = (state) => state.users;

export const userByIdSelector = (state, id) => {
  return createSelector(usersSelector, (users) => {
    return users[id];
  })(state);
};
