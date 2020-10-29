import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';

import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import Price from '../price';
import {
  orderProductsSelector,
  orderPushedSelector,
  orderPushErrorSelector,
  orderPushingSelector,
  totalSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../context/user-context';

import { pushOrder } from '../../redux/actions';
import Loader from '../loader';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  pushing,
  pushed,
  pushOrder,
  match,
}) {
  // console.log('render Basket');
  // const { name } = useContext(userContext);
  if (pushing) return <Loader />;

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  const checkoutButton =
    match && match.path === '/checkout' ? (
      <Button primary block onClick={pushOrder} disabled={pushed}>
        checkout
      </Button>
    ) : (
      <Link to="/checkout">
        <Button primary block>
          checkout
        </Button>
      </Link>
    );

  return (
    <div className={styles.basket}>
      <h4 className={styles.title}>
        {/* {`${name}'s Basket`} */}
        {/* <UserConsumer children={({ name }) => `${name}'s Basket`} /> */}
        <UserConsumer>{({ name }) => `${name}'s Basket`}</UserConsumer>
      </h4>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
          <CSSTransition
            key={product.id}
            timeout={500}
            classNames="basket-item-animation"
          >
            <BasketItem
              product={product}
              amount={amount}
              subtotal={subtotal}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={<Price price={total} />} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={<Price price={total} />} bold />
      {checkoutButton}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  pushing: orderPushingSelector,
  pushed: orderPushedSelector,
});

export default connect(mapStateToProps, { pushOrder })(Basket);
