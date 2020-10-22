import { createSelector } from 'reselect';

export const arrToMap = (arr) => {
  if (!arr) {
    return null;
  }
  return arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
};

export const getById = (selector, defaultValue) =>
  createSelector(
    selector,
    (_, props) => props.id,
    (entity, id) => entity[id] || defaultValue
  );
