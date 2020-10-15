import { combineReducers } from 'redux';
import orderReducer from './order';
import restaurants from './restaurants';

const reducer = combineReducers({
  foo: () => 'bar',
  order: orderReducer,
  restaurants,
});

export default reducer;
