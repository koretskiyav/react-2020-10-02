import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Rate from '../../rate';
import styles from './review.module.css';
//import store from '../../../redux/store';

// const Review = ({ user, text, rating }) => (
const Review = ({ review, users }) => {
  // console.log('UUUUUUUU Users :', users);
  // console.log('ZZZZZZZZZZZ :', review);
  // console.log(store.getState())
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {/* {review.userId} */}
            {users[review.userId].name}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {review.text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={review.rating} />
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

const mapStateToProps = (state, ownProps) => ({
  // amount: state.order[ownProps.id] || 0,
  // product: state.products[ownProps.id],
  review: state.reviews[ownProps.id],
  users: state.users,
  //user: review.user,
  //text: state.reviews[ownProps.id],
  //rating: review.rating,
});

const mapDispatchToProps = {
  // decrement,
  // increment,
};

// export default Review;

export default connect(mapStateToProps, mapDispatchToProps)(Review);
