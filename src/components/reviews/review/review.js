import React from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import { connect } from 'react-redux';
import { reviewByIdSelector, userByIdSelector } from '../../../redux/selectors';

const Review = ({ review: { text, rating }, user: { name = 'Anonymous' } }) => {
  return (
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
};

Review.propTypes = {
  review: PropTypes.shape({
    text: PropTypes.string,
    userId: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default connect((state, ownProps) => ({
  review: reviewByIdSelector(state, ownProps.id),
  user: userByIdSelector(state, ownProps.id),
}))(Review);
