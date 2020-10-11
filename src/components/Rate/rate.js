import React from 'react';
import PropTypes from 'prop-types';

export default function Rate({ rate }) {
  return (
    <p>{rate} звезд</p>
  );
}

Rate.propTypes = {
  rate: PropTypes.number.isRequired
}