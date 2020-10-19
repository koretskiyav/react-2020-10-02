import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

const Reviews = ({ reviewIds }) => {
  return (
    <div className={styles.reviews}>
      {reviewIds.map((reviewId) => (
        <Review key={reviewId} reviewId={reviewId} />
      ))}
      <ReviewForm />
    </div>
  );
};

Reviews.propTypes = {
  reviewIds: PropTypes.arrayOf(String).isRequired,
};

export default Reviews;
