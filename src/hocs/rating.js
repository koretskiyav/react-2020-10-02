import React from 'react';
import useAverageRate from '../hooks/use-avarage-rate';

export default (WrappedComponent) => (props) => {
  const ratingProps = useAverageRate(props.reviews);
  return <WrappedComponent {...props} {...ratingProps} />;
};
