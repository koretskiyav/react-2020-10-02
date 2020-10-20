import { normalizedReviews } from '../../fixtures';
import { NEW_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

// export default (reviews = defaultReviews, state, action) => {
export default (state = defaultReviews, action) => {
  const { type, payload } = action;
  ///console.log('ZZZZZZZZZZ', payload);
  switch (type) {
    case NEW_REVIEW:
      return {
        ...state,
        [payload.id]: {
          id: payload.id,
          userId: payload.userId,
          text: payload.text,
          rating: payload.rating,
        },
      };
    default:
      return state;
  }
};
