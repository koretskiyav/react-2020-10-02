import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { orderMessageSelector } from '../redux/selectors';

const OrderErrorPage = ({ orderMessage }) => {
  return (
    <div>
      <h1>Error</h1>
      <span>{orderMessage}</span>
    </div>
  );
};

export default connect(
  createStructuredSelector({
    orderMessage: orderMessageSelector,
  })
)(OrderErrorPage);
