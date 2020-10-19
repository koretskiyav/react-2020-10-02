import { v4 as uuidv4 } from 'uuid';

export const uuider = (_) => (next) => (action) => {
  if (!action.meta?.uuid) {
    return next(action);
  }

  const uuid = uuidv4();
  action.payload[action.meta.uuid] = uuid;

  next(action);
  return uuid;
};

export const reviewUuider = (_) => (next) => (action) => {
  if (!action.meta?.reviewUuider) {
    return next(action);
  }

  action.payload.user.id = uuidv4();
  action.payload.review.id = uuidv4();
  action.payload.review.userId = action.payload.user.id;

  return next(action);
};
