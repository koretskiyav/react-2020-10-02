import produce from 'immer';
import { LOAD_PRODUCTS, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
};

export default (state = initialState, action) => {
  const { type, response } = action;

  switch (type) {
    case LOAD_PRODUCTS + SUCCESS:
      return produce(state, (draft) => {
        const products = arrToMap(response, (product) => ({ ...product }));
        draft.entities = { ...state.entities, ...products };
      });
    default:
      return state;
  }
};
