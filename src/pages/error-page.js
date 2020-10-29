import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { orderErrorSelector } from '../redux/selectors';
import Price from '../components/price';

const style = {
  color: 'red',
  textAlign: 'center',
};

const getErrorWithProperCurrency = (error) => {
  const start = error.indexOf('$');
  const end = error.lastIndexOf('$');
  const firstSum = error.slice(start + 1, start + 3);
  const secondSum = error.slice(end + 1, end + 3);
  const textBeforeFirstSum = error.slice(0, start);
  const textBeforeSecondSum = error.slice(start + 3, end);

  return (
    <span>
      {textBeforeFirstSum}
      <Price amount={parseInt(firstSum)} />
      {textBeforeSecondSum}
      <Price amount={parseInt(secondSum)} />
    </span>
  );
};

function ErrorPage({ error }) {
  return (
    <div style={style}>
      <h1>Error page!</h1>
      <h2>{error && getErrorWithProperCurrency(error)}</h2>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  error: orderErrorSelector,
});

export default connect(mapStateToProps)(ErrorPage);
