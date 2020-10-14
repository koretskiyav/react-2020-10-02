import { restaurants } from '../../fixtures';

export default (state = restaurants, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
