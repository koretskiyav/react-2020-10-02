import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from './product.module.css';

import { increment, decrement } from '../../redux/actions';

import Button from '../button';
import { productAmountSelector, productSelector } from '../../redux/selectors';

const Product = ({ product, amount = 0, increment, decrement }) => {
  if (!product) return null;

  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
          <div className={styles.price}>{product.price} $</div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={() => decrement(product.id)}
                data-id="product-decrement"
                icon="minus"
              />
              <Button
                onClick={() => increment(product.id)}
                data-id="product-increment"
                icon="plus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  // from HOC counter
  amount: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  amount: productAmountSelector,
  product: productSelector,
});

const mapDispatchToProps = {
  decrement,
  increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
