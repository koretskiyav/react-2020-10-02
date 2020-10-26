import { createSelector } from 'reselect';

export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const getById = (selector, defaultValue, idPropsPath = 'id') =>
  createSelector(
    selector,
    (_, props) => {
      return idPropsPath.split('.').reduce((acc, i) => {
        return acc[i];
      }, props);
    },
    (entity, id) => entity[id] || defaultValue
  );
