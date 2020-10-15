import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './order.module.css';

import { connect } from 'react-redux';

import { increment, decrement, reset } from '../../redux/actions';

const Order = ({ decrement, increment, reset, state }) => {
  const { order, restaurants } = state;
  const orderList = () => {
    const values = Object.values(order);
    const keys = Object.keys(order);
    console.log('====================================');
    console.log(values, keys);
    console.log('====================================');

    let list = [];

    for (const key of keys) {
      restaurants.map((restaurant, rIndex) =>
        restaurant.menu.map((recipe, mIndex) => {
          if (recipe.id === key) {
            list.push({ ...recipe, _amount: order[key] });
          }
        })
      );
    }

    console.log('====================================');
    console.log('LIST: ', list);
    console.log('====================================');

    return list;
  };

  console.log('====================================');
  console.log('orderList: ', orderList);
  console.log('order: ', order);
  console.log('restaurants: ', restaurants);
  console.log('====================================');

  return (
    <>
      {orderList && orderList.length > 0 && (
        <div className={styles.order}>
          <h2>Order list</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((orderItem, index) => {
                return (
                  <tr key={index}>
                    <td>{orderItem.name}</td>
                    <td>{orderItem.amount}</td>
                    <td>
                      <button></button>
                      <button></button>
                      <button></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

Order.propTypes = {
  orderList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      amount: PropTypes.string,
    }).isRequired
  ),
  fetchData: PropTypes.func,
  amount: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = {
  decrement,
  increment,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
