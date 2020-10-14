import { combineReducers } from 'redux';
import orderReducer from './order';
import restaurantsReducer from './restaurants';

const reducer = combineReducers({
  foo: () => 'bar',
  order: orderReducer,
  restaurants: restaurantsReducer,
});

export default reducer;
