import React from 'react';
import { routerDetailSelector } from '../redux/selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function ErrorPage({ detail }) {
  return <h2 style={{ textAlign: 'center' }}>Error: {detail}</h2>;
}
export default connect(
  createStructuredSelector({
    detail: routerDetailSelector,
  })
)(ErrorPage);
