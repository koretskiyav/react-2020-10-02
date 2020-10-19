import { normalizedReviews } from '../../fixtures';
import { CREATE_REVIEW, ADD_REVIEW_SYNC } from '../constants';

// { [reviewId]: review }

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_REVIEW:
      return {
        ...reviews,
        [payload.id]: payload,
      };

    case ADD_REVIEW_SYNC:
      return {
        ...reviews,
        [payload.review.id]: payload.review,
      };

    default:
      return reviews;
  }
};
