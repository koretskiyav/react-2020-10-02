import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import Review from './review';
import ReviewForm from './review-form';
import Loader from '../loader';
import Error from '../error';
import {
  usersSelector,
  reviewsLoadedByRestaurantSelector,
  reviewsLoadingByRestaurantSelector,
  reviewsErrorByRestaurantSelector,
  usersLoadingSelector,
  usersLoadedSelector,
  usersErrorSelector,
} from '../../redux/selectors';
import { loadUsers, loadReviews } from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import styles from './reviews.module.css';

const Reviews = ({
  users,
  restaurantId,
  reviews,
  loadUsers,
  loadReviews,
  error,
  needUsers,
  needReviews,
  hasLoader,
}) => {
  useEffect(() => {
    if (needReviews) loadReviews();
    if (needUsers) loadUsers();
  }, [restaurantId]); // eslint-disable-line

  if (error) return <Error {...error} />;

  if (hasLoader) return <Loader />;

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
  loadReviews: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  needReviews: PropTypes.bool,
  needUsers: PropTypes.bool,
  hasLoader: PropTypes.bool,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    reviewsLoading,
    reviewsLoaded,
    reviewsError,
    usersLoading,
    usersLoaded,
    usersError,
    ...rest
  } = stateProps;

  return {
    needReviews: !reviewsLoading && !reviewsLoaded,
    needUsers: !usersLoading && !usersLoaded,
    hasLoader: usersLoading || reviewsLoading || !usersLoaded || !reviewsLoaded,
    error: usersError || reviewsError || null,
    ...rest,
    ...dispatchProps,
    ...ownProps,
  };
};

export default connect(
  createStructuredSelector({
    users: usersSelector,
    reviewsLoading: reviewsLoadingByRestaurantSelector,
    reviewsLoaded: reviewsLoadedByRestaurantSelector,
    reviewsError: reviewsErrorByRestaurantSelector,
    usersLoading: usersLoadingSelector,
    usersLoaded: usersLoadedSelector,
    usersError: usersErrorSelector,
  }),

  (dispatch, { restaurantId }) => ({
    loadUsers: () => dispatch(loadUsers()),
    loadReviews: () => dispatch(loadReviews(restaurantId)),
  }),

  mergeProps
)(Reviews);
