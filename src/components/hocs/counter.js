import React from 'react';
import useAmount from '../hooks/use-amount';

export default (WrappedComponents) => (props) => {
  const amountProps = useAmount(0);
  return <WrappedComponents {...props} {...amountProps} />;
};
