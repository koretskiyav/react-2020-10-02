import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middleware/logger';
<<<<<<< HEAD
=======
import uuidCreator from './middleware/uuid-creator';
>>>>>>> dev-ht4

import reducer from './reducer';

const store = createStore(
  reducer,
<<<<<<< HEAD
  composeWithDevTools(applyMiddleware(logger))
=======
  composeWithDevTools(applyMiddleware(logger, uuidCreator))
>>>>>>> dev-ht4
);

export default store;
