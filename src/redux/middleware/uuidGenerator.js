import { v4 as uuidv4 } from 'uuid';

export default () => (next) => (action) => {
  const { idsKeysList } = action;

  if (idsKeysList) {
    const generatedIds = idsKeysList.reduce(
      (acc, idKey) => ({ ...acc, [idKey]: uuidv4() }),
      {}
    );
    return next({
      ...action,
      generatedIds,
    });
  }

  return next(action);
};
