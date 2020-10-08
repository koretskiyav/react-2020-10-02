import React from 'react';
import useRange from '../hooks/use-range';

export default (WrappedComponent) => (props) => {
  const rangeProps = useRange({ rate: props.rate });
  return <WrappedComponent {...props} {...rangeProps} />;
};
