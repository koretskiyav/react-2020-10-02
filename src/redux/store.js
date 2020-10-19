import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middleware/logger';
import { uuider, reviewUuider } from './middleware/uuider';
import thunk from './middleware/thunk';

import reducer from './reducer';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, uuider, reviewUuider, logger))
);

export default store;
