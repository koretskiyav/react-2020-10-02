import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';

import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import Loader from '../loader';
import {
  orderProductsSelector,
  totalSelector,
  orderSendingSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../context/user-context';
import { checkout } from '../../redux/actions';
import { currencyContext } from '../../context/currency-contex';

function Basket({ title = 'Basket', total, orderProducts, onClick, sending }) {
  // console.log('render Basket');
  // const { name } = useContext(userContext);
  const { shortConvert } = useContext(currencyContext);

  const handleOnClick = (ev) => {
    ev.preventDefault();
    onClick();
  };
  if (sending) return <Loader />;
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
              subtotal={shortConvert(subtotal)}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={`${shortConvert(total)}`} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={`${shortConvert(total)}`} bold />
      <Button primary block onClick={handleOnClick}>
        checkout
      </Button>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalSelector,
  orderProducts: orderProductsSelector,
  sending: orderSendingSelector,
});
const mapDispatchToProps = {
  onClick: checkout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
