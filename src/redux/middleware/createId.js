import { v4 as uuidv4 } from 'uuid';
export default (store) => (next) => (action) => {
  const { createId, ...rest } = action;
  if (!createId) return next(action);
  next({
    ...rest,
    createId: uuidv4(),
  });
};
