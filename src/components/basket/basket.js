import React from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';

import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderProductsSelector,
  totalSelector,
  orderedItemsSelector,
  orderLoadingSelector,
} from '../../redux/selectors';
import { orderItems } from '../../redux/actions';
import { UserConsumer } from '../../context/user-context';
import { useCurrency } from '../../hooks/use-currency';

const CHECKOUT_PAGE_PATH = '/checkout';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  orderItems,
  orderedItems,
  orderLoading,
}) {
  // console.log('render Basket');
  // const { name } = useContext(userContext);
  const toCurrency = useCurrency();
  const location = useLocation();
  const isCheckoutPage = location.pathname === CHECKOUT_PAGE_PATH;

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

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
      <BasketRow label="Sub-total" content={toCurrency(total)} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={toCurrency(total)} bold />
      {isCheckoutPage ? (
        <Button
          disabled={orderLoading}
          primary
          block
          onClick={() => orderItems({ orderedItems })}
        >
          checkout
        </Button>
      ) : (
        <Link to={CHECKOUT_PAGE_PATH}>
          <Button primary block>
            checkout
          </Button>
        </Link>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  orderedItems: orderedItemsSelector,
  orderLoading: orderLoadingSelector,
});

export default connect(mapStateToProps, { orderItems })(Basket);
