import { SUBMIT } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  const { type, payload } = action;
  const uuidUser = uuidv4();
  const uuidReview = uuidv4();

  if (type === SUBMIT) {
    const uuid = uuidv4();
    const { formInputs, name } = payload;
    const newFormInputs = { ...formInputs, reviewId: uuidReview, userId: uuidUser }
    action.payload = { ...newFormInputs };
  }
  next(action);
};
