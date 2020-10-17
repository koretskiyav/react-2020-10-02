import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload, generatedIds } = action;

  switch (type) {
    case ADD_REVIEW:
      const { rate: rating, text } = payload;
      const { reviewId: id, userId } = generatedIds;

      return {
        ...reviews,
        [id]: {
          id,
          rating,
          text,
          userId,
        },
      };
    default:
      return reviews;
  }
};
