import { combineReducers } from 'redux';
import orderReducer from './order';
import { restaurants } from '../../fixtures';

const reducer = combineReducers({
  restaurants: () => restaurants,
  order: orderReducer,
});

export default reducer;
