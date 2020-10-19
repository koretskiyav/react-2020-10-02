import { v4 as uuidv4 } from 'uuid';
import { newReview, newUser, publish } from '../actions';
import { PUBLISH } from '../constants';
export default (store) => (next) => (action) => {
  switch (action.type) {
    case PUBLISH:
      if (action.payload.reviewId) {
        next(publish(action.payload.id, action.payload.reviewId, {}));
      } else if (action.payload.values.name && action.payload.values.text) {
        const userId = uuidv4();
        store.dispatch(newUser(userId, action.payload.values.name));
        const reviewId = uuidv4();
        store.dispatch(
          newReview(
            reviewId,
            userId,
            action.payload.values.text,
            action.payload.values.rate
          )
        );
        next(publish(action.payload.id, reviewId, {}));
      }
      break;
    default:
      next(action);
      break;
  }
};
