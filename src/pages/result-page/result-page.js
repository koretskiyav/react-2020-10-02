import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { orderErrorSelector, orderSendedSelector } from '../../redux/selectors';
import styles from './result-page.module.css';

function ResultPage({ error, sended }) {
  if (error) {
    return (
      <p className={styles.message + ' ' + styles.failure}>{error.message}</p>
    );
  }

  if (sended) {
    return (
      <p className={styles.message + ' ' + styles.success}>
        Thank you for your order!
      </p>
    );
  }

  return <Redirect to="/" />;
}

export default connect(
  createStructuredSelector({
    error: orderErrorSelector,
    sended: orderSendedSelector,
  })
)(ResultPage);
