import { ADD_REVIEW } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export default () => (next) => (action) => {
  if (action.type === ADD_REVIEW) {
    const payload = {
      ...action.payload,
      id: uuidv4(),
      userId: uuidv4(),
    };

    return next({
      ...action,
      payload,
    });
  }

  return next(action);
};
