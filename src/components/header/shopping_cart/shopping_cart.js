import React from 'react';
import { connect } from 'react-redux';
import MinusIcon from '../../product/icons/minus.svg';
import PlusIcon from '../../product/icons/plus.svg';
import { increment, decrement, remove } from '../../../redux/actions';
import styles from './shopping_cart.module.scss';

function shoppingCart({ items, increment, decrement, remove, products }) {
  const orderedItems = [];
  let total = 0;
  for (let itemId in items) {
    if (!items.hasOwnProperty(itemId)) continue;
    let subtotal = products[itemId].price * items[itemId];
    total += subtotal;
    let itemBlock = (
      <div className={styles.cartItem} key={itemId}>
        {products[itemId].name} ${products[itemId].price} <br />
        subtotal: ${subtotal}
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => decrement(itemId)}>
            <img src={MinusIcon} alt="minus" />
          </button>
          {items[itemId]}
          <button className={styles.button} onClick={() => increment(itemId)}>
            <img src={PlusIcon} alt="plus" />
          </button>
          <button className={styles.button} onClick={() => remove(itemId)}>
            X
          </button>
        </div>
      </div>
    );
    orderedItems.push(itemBlock);
  }

  return (
    <div className={styles.cart}>
      Cart
      {orderedItems}
      <div className={styles.total}>Total: ${total}</div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  items: state.order || [],
  products: state.products || {},
});

const mapDispatchToProps = {
  decrement,
  increment,
  remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(shoppingCart);
