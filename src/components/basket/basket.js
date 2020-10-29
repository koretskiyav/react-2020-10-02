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
import {
  orderProductsSelector,
  pathnameSelector,
  totalSelector,
  ordersIdsSelector,
  orderLoadingSelector,
  orderLoadedSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../context/user-context';
import { makeOrder } from '../../redux/actions';
import Loader from '../loader';
import Price from '../price';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  pathname,
  makeOrder,
  ordersIdsSelector,
  loading,
}) {
  // console.log('render Basket');
  // const { name } = useContext(userContext);
  if (loading) {
    return <Loader />;
  }

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  const onOrderSubmit = () => {
    if (pathname !== '/checkout') {
      return;
    }

    makeOrder(ordersIdsSelector);
  };

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
              subtotal={<Price amount={subtotal} />}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={<Price amount={total} />} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={<Price amount={total} />} bold />
      <Link to="/checkout">
        <Button primary block onClick={onOrderSubmit}>
          checkout
        </Button>
      </Link>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  pathname: pathnameSelector,
  ordersIdsSelector: ordersIdsSelector,
  loading: orderLoadingSelector,
});

export default connect(mapStateToProps, { makeOrder })(Basket);
