import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';

import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderLoadedSelector,
  orderLoadingErrorSelector,
  orderLoadingSelector,
  orderProductsSelector,
  totalSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../context/user-context';
import useCurrency from '../../hooks/use-currency';
import { placeOrder } from '../../redux/actions';
import Loader from '../loader';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  match,
  loading,
  loaded,
  placeOrder,
  error,
}) {
  const { inCurrency } = useCurrency();
  if (loaded) {
    return <Redirect to={'/order-success'} />;
  }

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }
  const handleCheckout = () => {
    if (undefined === match) {
      return null;
    }
    const { path, isExact } = match;
    if ('/checkout' !== path || !isExact) {
      return null;
    }
    placeOrder(orderProducts);
  };

  return (
    <div className={styles.basket}>
      <h4 className={styles.title}>
        {/* {`${name}'s Basket`} */}
        {/* <UserConsumer children={({ name }) => `${name}'s Basket`} /> */}
        <UserConsumer>{({ name }) => `${name}'s Basket`}</UserConsumer>
      </h4>
      {error && <h3 className={styles.error}>{error.message}</h3>}
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
          <CSSTransition
            key={product.id}
            timeout={5000}
            classNames="basket-item-animation"
          >
            <BasketItem
              product={product}
              amount={amount}
              subtotal={inCurrency(subtotal)}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={inCurrency(total)} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={inCurrency(total)} bold />
      <Link to="/checkout">
        <Button primary block onClick={handleCheckout} disabled={loading}>
          checkout {loading && <Loader />}
        </Button>
      </Link>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  loading: orderLoadingSelector,
  loaded: orderLoadedSelector,
  error: orderLoadingErrorSelector,
});

const mapDispatchToProps = {
  placeOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
