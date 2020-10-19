import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload, reviewId, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...reviews,
        [reviewId]: {
          text: payload.review.text,
          rating: payload.review.rate,
          id: reviewId,
          userId: userId,
        },
      };
    default:
      return reviews;
  }
};
