import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  usersLoadingSelector,
  usersLoadedSelector,
} from '../../redux/selectors';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Loader from '../loader';

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  loadUsers,
  loadingReviews,
  loadedReviews,
  loadedUsers,
  loadingUsers,
}) => {
  useEffect(() => {
    if (!loadedUsers && !loadingUsers) {
      loadUsers();
    }
    if (!loadedReviews && !loadingReviews) {
      loadReviews(restaurantId);
    }
  }, [
    restaurantId,
    loadedReviews,
    loadedUsers,
    loadingUsers,
    loadingReviews,
    loadUsers,
    loadReviews,
  ]);

  if (loadingReviews || !loadedReviews || loadingUsers || !loadedUsers) {
    return <Loader />;
  }

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  loadReviews: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  loadingReviews: PropTypes.bool.isRequired,
  loadedReviews: PropTypes.bool.isRequired,
  loadingUsers: PropTypes.bool.isRequired,
  loadedUsers: PropTypes.bool.isRequired,
};

export default connect(
  (state, ownProps) => ({
    loadingReviews: reviewsLoadingSelector(state, ownProps),
    loadedReviews: reviewsLoadedSelector(state, ownProps),
    loadingUsers: usersLoadingSelector(state),
    loadedUsers: usersLoadedSelector(state),
  }),
  { loadReviews, loadUsers }
)(Reviews);
