import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OrderItem } from './order-item';

import styles from './order.module.css';

export const Order = ({ restaurants, order }) => {
  // [product.id]: { id: restaurant.id, price}
  const productMap = useMemo(
    () =>
      restaurants.reduce(
        (res, { id: restoId, menu }) =>
          menu.reduce(
            (res, { id: productId, price }) => ({
              ...res,
              [productId]: { id: restoId, price },
            }),
            res
          ),
        {}
      ),
    [restaurants]
  );

  // [restaurant.id]: true
  const affectedRestos = useMemo(
    () =>
      Object.keys(order).reduce(
        (res, productId) => ({
          ...res,
          [productMap[productId].id]: true,
        }),
        {}
      ),
    [order, productMap]
  );

  const totalPrice = useMemo(
    () =>
      Object.entries(order).reduce(
        (sum, [productId, count]) => sum + count * productMap[productId].price,
        0
      ),
    [order, productMap]
  );

  return (
    <div className={styles.order}>
      <div className={styles.total}>
        Total: <b>$ {totalPrice}</b>
      </div>

      {restaurants
        .filter(({ id }) => affectedRestos[id])
        .map(({ id, name, menu }) => (
          <div key={id} className={styles.resto}>
            <div className={styles.restoName}>{name}</div>
            <div className={styles.products}>
              {menu
                .filter(({ id }) => order[id] > 0)
                .map((product) => (
                  <OrderItem key={product.id} product={product} />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

Order.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,
};

const mapState = ({ restaurants, order }) => ({ restaurants, order });

export default connect(mapState)(Order);
