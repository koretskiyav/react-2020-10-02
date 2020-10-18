import { v4 as uuidv4 } from 'uuid';

export default (_) => (next) => (action) => {
  if (!action.meta?.uuid) {
    return next(action);
  }

  const uuid = uuidv4();
  action.payload[action.meta.uuid] = uuid;

  next(action);
  return uuid;
};
