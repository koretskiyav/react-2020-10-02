import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import cn from 'classnames';
import styles from './basket.module.css';
import './basket.css';

import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderProductsSelector,
  totalSelector,
  orderErrorSelector,
  orderWaitingSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../context/user-context';
import Price from '../price/price';
import { createOrder } from '../../redux/actions';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  match,
  createOrder,
  errorMessage,
  waiting,
}) {
  const error = match && match.isExact && '' !== errorMessage && (
    <p className={styles.error}>{errorMessage}</p>
  );
  const checkoutBtn =
    match && match.isExact ? (
      <Button primary block onClick={() => createOrder()}>
        Place order
      </Button>
    ) : (
      <Link to="/checkout">
        <Button primary block>
          checkout
        </Button>
      </Link>
    );
  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={cn(styles.basket, { [styles.disabled]: waiting })}>
      <h4 className={styles.title}>
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
      {checkoutBtn}
      {error}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  errorMessage: orderErrorSelector,
  waiting: orderWaitingSelector,
});

const mapDispatchToProps = {
  createOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
