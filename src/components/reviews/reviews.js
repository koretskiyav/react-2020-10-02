import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import Loader from '../loader';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  userLoadedSelector,
  userLoadingSelector,
  reviewsLoadedSelector,
  reviewsLoadingSelector,
} from '../../redux/selectors';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  loadUsers,
  userLoaded,
  userLoading,
  reviewsLoaded,
  reviewsLoading,
}) => {
  useEffect(() => {
    if (!userLoaded && !userLoading) loadUsers();
    if (!reviewsLoaded && !reviewsLoading) loadReviews(restaurantId);
  }, [restaurantId]); // eslint-disable-line

  return (
    <div className={styles.reviews}>
      {userLoaded && reviewsLoaded ? (
        reviews.map((id) => <Review key={id} id={id} />)
      ) : (
        <Loader />
      )}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(
  (state, props) => ({
    reviewsLoaded: reviewsLoadedSelector(state, props),
    reviewsLoading: reviewsLoadingSelector(state, props),
    userLoaded: userLoadedSelector(state, props),
    userLoading: userLoadingSelector(state, props),
  }),
  { loadReviews, loadUsers }
)(Reviews);
