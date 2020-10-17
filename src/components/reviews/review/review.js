import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Rate from '../../rate';
import { reviewById, userById } from '../../../redux/selectors';
import styles from './review.module.css';

const mapStateToProps = (state, ownProps) => {
  const { userId, text, rating } = reviewById(state, ownProps);
  const { name: user } = userById(state, { userId });
  return { user, text, rating };
};

const Review = ({ user, text, rating }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user}
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
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect(mapStateToProps)(Review);
