import { combineReducers } from 'redux';
import orderReducer from './order';

const reducer = combineReducers({
  // foo: () => 'bar',
  // order: orderReducer,
  order: orderReducer,
  restaurants: restaurantsReducer,
});

export default reducer;
