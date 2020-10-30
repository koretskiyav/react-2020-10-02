import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import { connect } from 'react-redux';
import {
  reviewsLoadedSelector,
  usersLoadedSelector,
} from '../../redux/selectors';

import Loader from '../loader';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Reviews = ({
  reviews,
  restaurantId,
  loadReviews,
  loadUsers,
  usersLoaded,
  reviewsLoaded,
}) => {
  useEffect(() => {
    loadUsers();
    loadReviews(restaurantId);
  }, [restaurantId]); // eslint-disable-line

  if (!usersLoaded || !reviewsLoaded) return <Loader />;

  return (
    <div className={styles.reviews}>
      <TransitionGroup className={styles.wrap_reviews}>
        {reviews.map((id) => (
          <CSSTransition
            key={id}
            timeout={500}
            classNames="review-item-animation"
          >
            <Review id={id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = createStructuredSelector({
  reviewsLoaded: reviewsLoadedSelector,
  usersLoaded: usersLoadedSelector,
});

export default connect(mapStateToProps, { loadReviews, loadUsers })(Reviews);
