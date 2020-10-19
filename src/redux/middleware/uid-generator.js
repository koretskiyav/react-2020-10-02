import { GENERATED } from '../constants';

import { v4 as uuidv4 } from 'uuid';

export default (state) => (next) => (action) => {
  const { payload } = action;

  const keysForGen = Object.keys(payload)
    .filter((key) => key.includes(GENERATED))
    .map((key) => (payload[key] = uuidv4()));

  next(action);
};
