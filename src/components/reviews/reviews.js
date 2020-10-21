import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const Reviews = ({ reviews, restaurantId, loadReviews, loadUsers }) => {
  useEffect(() => {
    loadReviews(restaurantId);
    loadUsers();
  }, [restaurantId]); // eslint-disable-line

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
};

export default connect(null, { loadReviews, loadUsers })(Reviews);
