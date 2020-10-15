import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { increment, decrement, remove } from '../../redux/actions';
import MinusIcon from './icons/minus.svg';
import PlusIcon from './icons/plus.svg';

import styles from './cart.module.css';

const Cart = ({ products = [], increment, decrement, remove, fetchData }) => {
  return (
    <>
      <div className={styles.cart}>
        Cart
        <table id="table">
          <thead>
            <tr>
              <th>food</th>
              <th>price</th>
              <th>pcs.</th>
              <th>sum</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              if (product.amount > 0) {
                return (
                  <>
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>${product.price}</td>
                      <td>{product.amount}</td>
                      <td>${product.amount * product.price}</td>
                      <td className={styles.buttonscell}>
                        <button
                          className={styles.button}
                          onClick={() => decrement(product.id)}
                          data-id="product-decrement"
                        >
                          <img src={MinusIcon} alt="minus" />
                        </button>
                        <button
                          className={styles.button}
                          onClick={() => increment(product.id)}
                          data-id="product-increment"
                        >
                          <img src={PlusIcon} alt="plus" />
                        </button>
                        <button
                          className={styles.button}
                          onClick={() => remove(product.id)}
                          data-id="product-remove"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  </>
                );
              }
              return null;
            })}
          </tbody>
          <tfoot>
            <tr>
              <th id="total" colSpan="3">
                Total :
              </th>
              <td>
                $
                {products.reduce((sum, current) => {
                  return sum + current.price * current.amount;
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

Cart.propTypes = {
  fetchData: PropTypes.func,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  remove: PropTypes.func,
};

const mapStateToProps = (state) => {
  const order = state.order;
  const restaurants = state.restaurants;

  const products = restaurants
    .reduce((res, cur) => {
      return res.concat(cur.menu);
    }, [])
    .filter((prod) => {
      return prod.id in order;
    })
    .map((prod) => {
      return (prod = { ...prod, amount: order[prod.id] });
    });

  return { products };
};

const mapDispatchToProps = {
  decrement,
  increment,
  remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
