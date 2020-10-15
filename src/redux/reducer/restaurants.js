import { restaurants } from '../../fixtures';

export default (state = restaurants, action) => {
  switch (action) {
    default:
      return restaurants;
  }
};
