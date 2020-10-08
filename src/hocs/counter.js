import React from 'react';

import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => (props) => {
  const amountProps = useAmount(0);
  return <WrappedComponent {...props} {...amountProps} />;
};

// export default (WrappedComponent) => {
//   const HocComponent = (props) => {
//     const { count, increment, decrement } = useAmount(5);

//     return (
//       <WrappedComponent
//         {...props}
//         count={count}
//         increment={increment}
//         decrement={decrement}
//       />
//     );
//   };

//   return HocComponent;
// };
