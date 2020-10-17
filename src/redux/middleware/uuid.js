import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from '../constants';

export default (store) => (next) => (action) => {
  if ([ADD_REVIEW].includes(action.type)) {
    action.payload.reviewId = uuidv4();
    action.payload.userId = uuidv4();
  }
  next(action);
};
