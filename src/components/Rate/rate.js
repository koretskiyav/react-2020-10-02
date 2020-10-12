import React from 'react';
import PropTypes from 'prop-types';

export default function Rate({ rate }) {
  return (
    <div>
      <p data-id="rate-value">{rate}</p>
      <p>&nbsp;звезд</p>
    </div>
  );
}

Rate.propTypes = {
  rate: PropTypes.number.isRequired
}