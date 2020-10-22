import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import {
  reviewsListSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  reviewLoadedId,
  usersLoadingSelector,
  usersLoadedSelector,
} from '../../redux/selectors';
import { loadReviews, loadUsers } from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  loadUsers,
  loading,
  loadedId,
  loadingUsers,
  loadedUsers,
}) => {
  useEffect(() => {
    if (!loading && !loadedId[restaurantId]) loadReviews(restaurantId);
  }, [restaurantId]); // eslint-disable-line

  useEffect(() => {
    if (!loadingUsers && !loadedUsers) loadUsers();
  }, []); // eslint-disable-line

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
};

export default connect(
  (state) => ({
    reviewsList: reviewsListSelector(state),
    loading: reviewsLoadingSelector(state),
    loaded: reviewsLoadedSelector(state),
    loadedId: reviewLoadedId(state),
    loadingUsers: usersLoadingSelector(state),
    loadedUsers: usersLoadedSelector(state),
  }),
  { loadReviews, loadUsers }
)(Reviews);
