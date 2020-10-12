import React from 'react';
import useAmount from '../hooks/use-amount';

export default (amount) => (WrappedComponent) => (props) => {
  const amountProps = useAmount(amount);
  return <WrappedComponent {...props} {...amountProps} />;
};
