import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
} from '../../redux/selectors';
import Loader from '../loader';

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  loadUsers,
  needUpdateUsers,
  needUpdateReviews,
  loading,
  loaded,
}) => {
  //todo define how to make avoid few times request
  useEffect(() => {
    loadReviews(restaurantId);
  }, [needUpdateReviews]); // eslint-disable-line

  useEffect(() => {
    loadUsers(restaurantId);
  }, [needUpdateUsers]); // eslint-disable-line

  if (loading || !loaded || needUpdateReviews || needUpdateUsers) {
    return <Loader />;
  }

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
const mapStateToProps = (state, props) => ({
  loading: reviewsLoadingSelector(state),
  loaded: reviewsLoadedSelector(state),
  needUpdateReviews: !state.reviews.loadedRestaurantIds.includes(
    props.restaurantId
  ),
  needUpdateUsers: !state.users.loadedRestaurantIds.includes(
    props.restaurantId
  ),
});

export default connect(mapStateToProps, { loadReviews, loadUsers })(Reviews);
