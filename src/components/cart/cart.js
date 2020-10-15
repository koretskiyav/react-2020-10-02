import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './cart.module.css';

import { restaurants } from '../../fixtures';
import CartItem from './cart-item';

class Cart extends Component {
  constructor() {
    super();

    this.products = [];
  }

  componentWillUpdate(newState, newProps) {
    this.getProducts(newState.order);
  }

  getProducts(order) {
    const newOrders = Object.keys(order).filter(
      (id) =>
        // this.products.length ||
        !this.products.map((product) => product.id).includes(id)
    );
    const oldOrders = this.products
      .map((product) => product.id)
      .filter((id) => !Object.keys(order).includes(id));

    newOrders.forEach((productId) => {
      this.products.push(
        []
          .concat(...restaurants.map((restaurant) => restaurant.menu))
          .find(({ id }) => id === productId)
      );
    });

    this.products = this.products.filter(
      (product) => !oldOrders.includes(product.id)
    );
  }

  render() {
    return (
      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          {this.products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Cart);
