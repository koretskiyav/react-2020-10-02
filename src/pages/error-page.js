import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { orderPostErrorSelector } from '../redux/selectors';
import { clearError } from '../redux/actions';

class ErrorPage extends React.Component {
  componentWillUnmount() {
    this.props.clearError();
  }

  render() {
    const { error } = this.props;
    return error ? <h3>Error: {error.message}</h3> : <h3>Error!</h3>;
  }
}

export default connect(
  createStructuredSelector({
    error: orderPostErrorSelector,
  }),
  { clearError }
)(ErrorPage);
