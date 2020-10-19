import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Rate from '../../rate';
import { reviewsSelector, usersSelector } from '../../../redux/selectors';

import styles from './review.module.css';

const Review = ({ name, text, rating }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {name}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  userId: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect((state, ownProps) => {
  const { userId, text, rating } = reviewsSelector(state)[ownProps.reviewId];
  const { name } = usersSelector(state)[userId];

  return {
    name,
    text,
    rating,
  };
})(Review);
