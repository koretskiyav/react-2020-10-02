import React, { useEffect } from 'react';

import Rate from '../../rate';
import styles from './review.module.css';
import PropTypes from 'prop-types';

const Review = ({ id, user, text, rating, fetchData }) => {
  useEffect(() => {
    fetchData && fetchData(id);
  }, []); // eslint-disable-line

  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name}>{user}</h4>
          <p className={styles.comment}>{text}</p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating} />
        </div>
      </div>
    </div>
  );
};

Review.defaultProps = {
  user: 'Anonymous',
};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Review;
