import React, { useEffect, useState, useContext } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation, Redirect } from 'react-router-dom';
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
  orderPostProductsSelector,
  orderPostLoadingSelector,
  orderPostLoadedSelector,
  orderPostErrorSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../context/user-context';

import { postOrder } from '../../redux/actions';

import { currencyContext, returnSum } from '../../context/currency-context';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  orderPostProducts,
  postOrder,
  loading,
  loaded,
  error,
}) {
  // console.log('render Basket');
  // const { name } = useContext(userContext);
  const { currency } = useContext(currencyContext);
  const location = useLocation();
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setDisabled(loading);
  }, [loading]);

  if (error) {
    return <Redirect from="/checkout" to="/error" />;
  }

  if (loaded) {
    return <Redirect from="/checkout" to="/successfull-order" />;
  }

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
              subtotal={returnSum(subtotal, currency)}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={`${returnSum(total, currency)}`} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={`${returnSum(total, currency)}`} bold />
      {location.pathname === '/checkout' ? (
        <Button
          onClick={() => {
            postOrder(orderPostProducts);
          }}
          disabled={disabled}
          primary
          block
        >
          сheckout
        </Button>
      ) : (
        <Link to="/checkout">
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
  orderPostProducts: orderPostProductsSelector,
  loading: orderPostLoadingSelector,
  loaded: orderPostLoadedSelector,
  error: orderPostErrorSelector,
});

export default connect(mapStateToProps, { postOrder })(Basket);
