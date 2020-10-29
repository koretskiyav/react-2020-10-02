import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';

import BasketRow from './basket-row';
import BasketItem from './basket-item';
import CheckoutButton from '../checkout-button';
import Price from '../price';
import { orderProductsSelector, totalSelector } from '../../redux/selectors';
import { UserConsumer } from '../../context/user-context';

function Basket({ title = 'Basket', total, orderProducts }) {
  // console.log('render Basket');
  // const { name } = useContext(userContext);
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
      <BasketRow label="Sub-total" content={<Price amount={total} />} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={<Price amount={total} />} bold />
      <CheckoutButton />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
});

export default connect(mapStateToProps)(Basket);
