import { normalizedReviews } from '../../fixtures';
import { CREATEREVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATEREVIEW:
      const {
        reviewIdGenerated: id,
        userIdGenerated: userId,
        rate: rating,
        text,
      } = payload;

      return {
        ...reviews,
        [id]: { id, userId, rating, text },
      };

    default:
      return reviews;
  }
};
