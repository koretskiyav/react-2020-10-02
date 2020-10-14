import { LOAD } from '../constants';
import { restaurants } from '../../fixtures';

export default (state = restaurants, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD:
      const newState = [...state];

      return newState;
    default:
      return state;
  }
};
