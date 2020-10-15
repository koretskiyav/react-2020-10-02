import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Counter } from '../../counter';
import styles from './order-item.module.css';

export const RawOrderItem = ({ product, amount }) => {
  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <div className={styles.price}>{product.price * amount} $</div>
        </div>
        <div>
          <Counter productId={product.id} canRemove={true} />
        </div>
      </div>
    </div>
  );
};

RawOrderItem.propTypes = {
  // self props
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,

  // `counter` HOC props
  amount: PropTypes.number,
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.product.id] || 0,
});

export const OrderItem = connect(mapStateToProps)(RawOrderItem);
export default OrderItem;
