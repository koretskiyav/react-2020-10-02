import React from 'react';
import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => ({ initialAmount, ...props }) => {
  const amountProps = useAmount(initialAmount);
  return <WrappedComponent {...props} {...amountProps} />;
};
