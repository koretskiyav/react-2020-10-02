import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import { connect } from 'react-redux';
import {
  restaurantReviewsSelector,
  reviewsLoadedSelector,
  usersLoadedSelector,
} from '../../redux/selectors';

import Loader from '../loader';

const Reviews = ({
  reviews,
  loadReviews,
  loadUsers,
  usersLoaded,
  reviewsLoaded,
  ...props
}) => {
  useEffect(() => {
    loadUsers();
    loadReviews(props.match.params.id);
  }, [props.match.params.id]); // eslint-disable-line

  if (!usersLoaded || !reviewsLoaded) return <Loader />;

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={props.match.params.id} />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = createStructuredSelector({
  reviewsLoaded: reviewsLoadedSelector,
  usersLoaded: usersLoadedSelector,
  reviews: restaurantReviewsSelector,
});

export default connect(mapStateToProps, { loadReviews, loadUsers })(Reviews);
