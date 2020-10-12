import React from 'react';

import Rate from '../../rate';
import styles from './review.module.css';
import PropTypes, { shape } from 'prop-types';

const Review = ({ user, text, rating }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content} data-id="content">
      <div>
        <h4 className={styles.name} data-id="name">
          {user}
        </h4>
        <p className={styles.comment} data-id="text">
          {text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={rating} data-id="rate" />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  review: shape({
    id: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
  }),
};

export default Review;
