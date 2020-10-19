import { normalizedReviews } from '../../fixtures';
import { SUBMIT } from '../constants';


// { [reviewId]: review }

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);


export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;
  // console.log('Из reducer reviews=', action);


  switch (type) {
    case SUBMIT:
      return { ...reviews, [payload.reviewId]: { id: payload.reviewId, userId: payload.userId, text: payload.text, rating: payload.rate } };
    default:
      return reviews;
  }
};


