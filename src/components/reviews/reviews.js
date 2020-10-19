import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

const Reviews = ({ reviews, restaurantId }) => {
  // console.log('Из корня ревью выдача, reviews=', reviews);
  // console.log('Из корня ревью выдача, restaurantId=', restaurantId);
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review} id={review} />
      ))}
<<<<<<< HEAD
      <ReviewForm />
=======
      <ReviewForm restaurantId={restaurantId} />
>>>>>>> dev-ht4
    </div>
  );
};

// Reviews.propTypes = {
//   reviews: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };

export default Reviews;
