import React from 'react';
import { connect } from 'react-redux';

import products from '../products';
import { increment, decrement, del } from '../../redux/actions';

const Cart = ({ order, increment, decrement, del }) => {
  let productsInCart = Object.entries(order).map((item) => {
    return {
      ...products.find((product) => product.id === item[0]),
      amount: item[1],
    };
  });

  return (
    <div>
      {productsInCart.map((item) => {
        return (
          <div key={item.id}>
            {item.amount > 0 && (
              <div>
                {item.name} x {item.amount} = {item.price * item.amount}
                <button onClick={() => decrement(item.id)}>-</button>
                <button onClick={() => increment(item.id)}>+</button>
                <button onClick={() => del(item.id)}>x</button>
              </div>
            )}
          </div>
        );
      })}
      TOTAL:
      {productsInCart.reduce(
        (sum, current) => sum + current.price * current.amount,
        0
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order || 0,
});

const mapDispatchToProps = {
  decrement,
  increment,
  del,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
