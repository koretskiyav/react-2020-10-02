import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { sendOrder } from '../../redux/actions';
import { orderSendingSelector } from '../../redux/selectors';
import Loader from '../loader';
import Button from '../button';

const CheckoutButton = ({ sending, sendOrder }) => {
  const history = useHistory();
  const { path } = useRouteMatch();
  const text = path === '/checkout' ? 'purchase' : 'checkout';
  const onClick =
    path === '/checkout' ? sendOrder : () => history.push('/checkout');

  return (
    <Button primary block onClick={onClick} disabled={sending}>
      {sending ? <Loader /> : text}
    </Button>
  );
};

export default connect(
  createStructuredSelector({
    sending: orderSendingSelector,
  }),
  { sendOrder }
)(CheckoutButton);
