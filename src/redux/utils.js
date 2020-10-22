import { createSelector } from 'reselect';

export const arrToMap = (arr, mapper = (f) => f) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: mapper(item) }), {});

export const getById = (selector, defaultValue) =>
  createSelector(
    selector,
    (_, props) => props.id,
    (entity, id) => entity[id] || defaultValue
  );
