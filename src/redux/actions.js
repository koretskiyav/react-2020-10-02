import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_PRODUCTS,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});

export const loadProducts = (restaurantId) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCTS + REQUEST });

  try {
    const response = await fetch(
      `/api/products?id=${restaurantId}`
    ).then((res) => res.json());
    console.log(response);
    dispatch({ type: LOAD_PRODUCTS + SUCCESS, response });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOAD_PRODUCTS + FAILURE, error });
  }
};

export const loadReviews = (restaurantId) => async (dispatch) => {
  dispatch({ type: LOAD_REVIEWS + REQUEST });

  try {
    const response = await fetch(
      `/api/reviews?id=${restaurantId}`
    ).then((res) => res.json());
    dispatch({ type: LOAD_REVIEWS + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, error });
  }
};
