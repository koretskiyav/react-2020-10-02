import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './cart.module.css';

import { restaurants } from '../../fixtures';
import CartItem from './cart-item';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.products = [];
  }

  componentWillUpdate(newState, newProps) {
    this.getProducts(newState.order);
  }

  getProducts(order) {
    this.products = []
      .concat(...restaurants.map((restaurant) => restaurant.menu))
      .filter(({ id }) => Object.keys(order).includes(id));
  }

  getTotal = (products) =>
    products.reduce(
      (acc, product) =>
        (acc = acc + product.price * this.props.order[product.id]),
      0
    );

  render() {
    return (
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          {this.products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <div className={styles.total}>
            Total: {this.getTotal(this.products)} $
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Cart);
