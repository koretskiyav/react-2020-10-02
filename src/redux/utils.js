import { createSelector } from 'reselect';
import { REQUEST, SUCCESS, FAILURE } from './constants';

export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const getById = (selector, field = 'id', defaultValue) =>
  createSelector(
    selector,
    (_, props) => props[field],
    (entity, id) => entity[id] || defaultValue
  );

export const getApiActionCreator = (type, url, rest) => async (dispatch) => {
  dispatch({ type: type + REQUEST, ...rest });

  try {
    const response = await fetch(url).then((res) => res.json());
    dispatch({ type: type + SUCCESS, response, ...rest });
  } catch (error) {
    dispatch({ type: type + FAILURE, error, ...rest });
  }
};
