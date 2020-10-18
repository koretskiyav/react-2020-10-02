import { normalizedReviews } from '../../fixtures';
import { CREATE_REVIEW } from '../constants';

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

    default:
      return reviews;
  }
};
