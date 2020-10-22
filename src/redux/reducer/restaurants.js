import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_PRODUCTS,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

const RestaurantModel = {
  loadingProducts: false,
  loadedProducts: false,
  loadingReviews: false,
  loadedReviews: false,
};

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload, reviewId, response, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = null;
      });
    case LOAD_RESTAURANTS + SUCCESS:
      const restaurants = arrToMap(response, (restaurant) => ({
        ...restaurant,
        ...RestaurantModel,
      }));
      return produce(state, (draft) => {
        draft.entities = { ...state.entities, ...restaurants };
        draft.loading = false;
        draft.loaded = true;
      });
    case LOAD_RESTAURANTS + FAILURE:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.loaded = false;
        draft.error = error;
      });

    case ADD_REVIEW:
      return produce(state, (draft) => {
        draft.entities[payload.restaurantId].reviews.push(reviewId);
      });

    case LOAD_PRODUCTS + REQUEST:
      return produce(state, (draft) => {
        draft.entities[payload.restaurantId].loadingProducts = true;
      });
    case LOAD_PRODUCTS + SUCCESS:
      return produce(state, (draft) => {
        draft.entities[payload.restaurantId].loadingProducts = false;
        draft.entities[payload.restaurantId].loadedProducts = true;
      });

    case LOAD_REVIEWS + REQUEST:
      return produce(state, (draft) => {
        draft.entities[payload.restaurantId].loadingReviews = true;
      });
    case LOAD_REVIEWS + SUCCESS:
      return produce(state, (draft) => {
        draft.entities[payload.restaurantId].loadingReviews = false;
        draft.entities[payload.restaurantId].loadedReviews = true;
      });
    default:
      return state;
  }
};
