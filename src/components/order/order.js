import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrderItem from './order-item';

const Order = ({ restaurants, order }) => {
  const menu = restaurants.flatMap((restaurant) => restaurant.menu);
  let total = 0;
  let products = [];
  let keys = Object.keys(order);
  products = menu.filter((item) => {
    if (keys.includes(item.id) && order[item.id] !== 0) {
      return (total += order[item.id] * item.price);
    }
  });
  return (
    <div>
      <h3>Ваша корзина</h3>
      <div>
        {products.map((product) => (
          <OrderItem key={product.id} product={product} />
        ))}
      </div>
      <div>Итого: {total}$.</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
});

Order.propTypes = {
  Order: PropTypes.object,
  restaurants: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Order);
