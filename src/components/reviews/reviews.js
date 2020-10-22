import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Loader from '../loader';
import {
  usersLoadingSelector,
  usersLoadedSelector,
  restaurantLoadingReviewsSelector,
  restaurantLoadedReviewsSelector,
  reviewsListRestaurantSelector,
} from '../../redux/selectors';

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  loadUsers,
  loadingUsers,
  loadedUsers,
  loadingReviews,
  loadedReviews,
}) => {
  useEffect(() => {
    if (!loadingUsers && !loadedUsers) loadUsers();
    if (!loadingReviews && !loadedReviews) loadReviews(restaurantId);
  }, [restaurantId]); // eslint-disable-line

  if (loadingReviews && !loadedReviews) return <Loader />;

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
  loadingUsers: PropTypes.bool.isRequired,
  loadedUsers: PropTypes.bool.isRequired,
  loadingReviews: PropTypes.bool.isRequired,
  loadedReviews: PropTypes.bool.isRequired,
};

export default connect(
  (state, props) => ({
    reviews: reviewsListRestaurantSelector(state, props),
    loadingReviews: restaurantLoadingReviewsSelector(state, props),
    loadedReviews: restaurantLoadedReviewsSelector(state, props),
    loadingUsers: usersLoadingSelector(state),
    loadedUsers: usersLoadedSelector(state),
  }),
  { loadReviews, loadUsers }
)(Reviews);
