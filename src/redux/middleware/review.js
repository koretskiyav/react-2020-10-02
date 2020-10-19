import { v4 as uuidv4 } from 'uuid';
export default (store) => (next) => (action) => {
  const { reviewId, ...rest } = action;
  if (!reviewId) return next(action);
  next({
    ...rest,
    reviewId: uuidv4(),
  });
};
