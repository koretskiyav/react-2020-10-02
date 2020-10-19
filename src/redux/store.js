import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import createId from './middleware/createId';
import logger from './middleware/logger';
import user from './middleware/user';
import review from './middleware/review';

import reducer from './reducer';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(user, review, logger))
);

export default store;
