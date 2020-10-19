import { v4 as uuidv4 } from 'uuid';
export default (store) => (next) => (action) => {
  const { userId, ...rest } = action;
  if (!userId) return next(action);
  next({
    ...rest,
    userId: uuidv4(),
  });
};
