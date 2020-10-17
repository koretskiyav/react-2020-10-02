import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middleware/logger';

import reducer from './reducer';
import uuid from './middleware/uuid';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, uuid))
);

export default store;
