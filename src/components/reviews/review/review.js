import React from 'react';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';

import { reviewSelector, userSelector } from '../../../redux/selectors';

import { connect } from 'react-redux';

const Review = ({ user, text, rating }) => {
  return (
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
};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, ownProps) => {
  const { userId, text, rating } = reviewSelector(state, ownProps.id);
  const { name } = userSelector(state, userId);

  return { user: name, text, rating };
};

export default connect(mapStateToProps)(Review);
