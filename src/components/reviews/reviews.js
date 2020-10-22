import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import {
  isCurrentReviewsInStore,
  reviewsListSelector,
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  usersLoadingSelector,
  usersLoadedSelector,
} from '../../redux/selectors';

import { loadReviews, loadUsers } from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Loader from '../loader';

const Reviews = ({
  isCurrentReviewsInStore,
  reviews,
  restaurantId,
  loadReviews,
  loadUsers,
  reviewLoading,
  reviewLoaded,
  usersLoading,
  usersLoaded,
}) => {
  useEffect(() => {
    !isCurrentReviewsInStore && loadReviews(restaurantId);
    !isCurrentReviewsInStore && loadUsers(restaurantId);
  }, [restaurantId]); // eslint-disable-line

  const isReviewInProgress = reviewLoading || !reviewLoaded;
  const isUsersInProgress = usersLoading || !usersLoaded;

  if (isReviewInProgress && isUsersInProgress) return <Loader />;

  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} id={review.id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default connect(
  (state, ownProps) => ({
    isCurrentReviewsInStore: isCurrentReviewsInStore(
      state,
      ownProps.restaurantId
    ),
    reviews: reviewsListSelector(state),
    reviewLoading: reviewsLoadingSelector(state),
    reviewLoaded: reviewsLoadedSelector(state),
    usersLoading: usersLoadingSelector(state),
    usersLoaded: usersLoadedSelector(state),
  }),
  { loadReviews, loadUsers }
)(Reviews);
