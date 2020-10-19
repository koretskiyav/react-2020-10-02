import { normalizedReviews } from '../../fixtures';
import { NEW_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({
    ...acc,
    [review.id]: review,
  }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case NEW_REVIEW:
      return {
        ...reviews,
        [payload.id]: {
          id: payload.id,
          rating: payload.rating,
          text: payload.text,
          userId: payload.userId,
        },
      };
    default:
      return reviews;
  }
};
