import React from 'react';
import PropTypes from 'prop-types';

import Star from './star';

const noop = () => {};

const Rate = ({ value, onChange = noop }) => (
  <div>
    {[...Array(5)].map((_, i) => (
      <Star key={i} checked={i <= value - 1} onClick={() => onChange(i + 1)} />
    ))}
  </div>
);

Rate.defaultProps = {
  onChange: noop,
};

Rate.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number.isRequired,
};

export default Rate;
