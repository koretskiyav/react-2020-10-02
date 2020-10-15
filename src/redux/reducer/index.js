import { combineReducers } from 'redux';
import orderReducer from './order';
import { restaurants } from '../../fixtures';

const reducer = combineReducers({
  foo: () => 'bar',
  order: orderReducer,
  restaurants: () => restaurants,
});

export default reducer;
