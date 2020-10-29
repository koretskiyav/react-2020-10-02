import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import order from './order';
import restaurants from './restaurants';
import products from './products';
import reviews from './reviews';
import users from './users';
import orderPost from './orderPost';
import history from '../../history';

const reducer = combineReducers({
  router: connectRouter(history),
  order,
  restaurants,
  products,
  reviews,
  users,
  orderPost,
});

export default reducer;
