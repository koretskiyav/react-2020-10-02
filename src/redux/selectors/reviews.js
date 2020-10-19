import { createSelector } from 'reselect';

const reviewsSelector = (state) => state.reviews;

export const reviewByIdSelector = (state, id) => {
  return createSelector(reviewsSelector, (reviews) => {
    return reviews[id];
  })(state);
};

export const avgRaitingSelector = (state, reviewIds) => {
  return createSelector(() => {
    return (
      reviewIds.reduce((acc, id) => {
        return acc + reviewByIdSelector(state, id).rating;
      }, 0) / reviewIds.length
    );
  })(state);
};
