import React from 'react';
import { createStructuredSelector } from 'reselect';
import { orderPushErrorSelector } from '../../redux/selectors';
import { connect } from 'react-redux';

const OrderResult = ({ error }) => {
  if (error) {
    return <h1>{error.message}</h1>;
  }

  return <h1>Thank you for your order.</h1>;
};

export default connect(
  createStructuredSelector({
    error: orderPushErrorSelector,
  })
)(OrderResult);
