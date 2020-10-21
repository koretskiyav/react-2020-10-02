import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rate from '../../rate';
import styles from './review.module.css';
import { reviewSelector } from '../../../redux/selectors';

const Review = ({ review, user }) => {
  const { text, rating } = review;
  return <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user.name}
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
};

Review.propTypes = {
  review: PropTypes.object,
  user: PropTypes.object,
  text: PropTypes.string,
  // rating: PropTypes.number.isRequired,
};

// Review.defaultProps = {
//   user: 'Anonymous',
// };

const mapStateToProps = (state, ownProps) => {
  const userId = state.reviews[ownProps.id].userId;

  return {
    // review: state.reviews[ownProps.id],
    review: reviewSelector(state, ownProps),
    user: state.users[userId],
  }
};

/*
export default connect((state) => {
  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
  };
})(Basket);
*/


const mapDispatchToProps = {
  // decrement,
  // increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);

