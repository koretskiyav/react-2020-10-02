import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rate from '../../rate';
import styles from './review.module.css';
import { reviewByIdSelector } from '../../../redux/selectors/reviews';
import { userByIdSelector } from '../../../redux/selectors';

const Review = ({ reviewId, user, text, rating }) => {
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
  reviewId: PropTypes.string.isRequired,
  text: PropTypes.string,
  rating: PropTypes.number,
  user: PropTypes.string,
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, ownProps) => ({
  text: reviewByIdSelector(state, ownProps.reviewId).text,
  rating: reviewByIdSelector(state, ownProps.reviewId).rating,
  user: userByIdSelector(
    state,
    reviewByIdSelector(state, ownProps.reviewId).userId
  ).name,
});
export default connect(mapStateToProps)(Review);
