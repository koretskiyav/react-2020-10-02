import { combineReducers } from 'redux';
import orderReducer from './order';
import restaurantsReducer from './restaurants';
import totalReducer from './total';

const reducer = combineReducers({
  foo: () => 'bar',
  order: orderReducer,
  restaurants: restaurantsReducer,
  total: totalReducer,
});

export default reducer;
