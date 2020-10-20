import React from 'react';
import useForm from '../../../hooks/use-form';

import Rate from '../../rate';
import styles from './review-form.module.css';
import { connect } from 'react-redux';
import Button from '../../button';
import { sendReview } from '../../../redux/actions';

const INITIAL_VALUES = { name: '', text: '', rate: 5 };

// const ReviewForm = ({ onSubmit }) => {
const ReviewForm = ({ restId, sendReview }) => {
  const { values, handlers, reset } = useForm(INITIAL_VALUES);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    //sayhello();
    //console.log(values);
    // const id = uuid();
    // const userId = uuid();
    const name = values.name;
    const text = values.text;
    const rating = values.rate;
    //console.log({id, userId, name, text, rating});
    // sendReview(id, userId, name, text, rating);
    sendReview(restId, name, text, rating);
    reset();
  };

  return (
    <div className={styles.reviewForm}>
      <h4 className={styles.addReviewTitle}>Leave your review</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.reviewFormItem}>
          <input
            placeholder="Your name"
            className={styles.message}
            {...handlers.name}
          />
        </div>
        <div className={styles.reviewFormItem}>
          <textarea
            placeholder="Your review"
            className={styles.message}
            {...handlers.text}
          />
        </div>
        <div className={styles.rateWrap}>
          <span>Rating: </span>
          <span>
            <Rate {...handlers.rate} />
          </span>
        </div>
        <div className={styles.publish}>
          <Button primary block>
            PUBLISH REVIEW
          </Button>
        </div>
      </form>
    </div>
  );
};

// export default connect(null, () => ({
//   onSubmit: (values) => console.log(values), // TODO
// }))(ReviewForm);

const mapStateToProps = (state, ownProps) => ({
  // amount: state.order[ownProps.id] || 0,
  // product: state.products[ownProps.id],
  reviews: state.reviews,
});

const mapDispatchToProps = {
  sendReview,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
