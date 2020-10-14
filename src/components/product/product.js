import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './product.module.css';
import MinusIcon from './icons/minus.svg';
import PlusIcon from './icons/plus.svg';

import { increment, decrement, reset } from '../../redux/actions';

const Product = ({
  product,
  amount,
  increment,
  decrement,
  reset,
  fetchData,
  showReset,
}) => {
  useEffect(() => {
    fetchData && fetchData(product.id);
  }, []); // eslint-disable-line

  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>
            {product.ingredients?.join(', ')}
          </p>
          <div className={styles.price}>{product.price} $</div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttons}>
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
                className={showReset ? styles.button : styles.invisible}
                onClick={() => reset(product.id)}
                data-id="product-reset"
              >
                X
              </button>
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
  }).isRequired,
  fetchData: PropTypes.func,
  // from HOC counter
  amount: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.product.id] || 0,
});

const mapDispatchToProps = {
  decrement,
  increment,
  reset,
};

// const mapDispatchToProps = (dispatch) => ({
//   decrement: () => dispatch(decrement()),
//   increment: () => dispatch(increment()),
// });

export default connect(mapStateToProps, mapDispatchToProps)(Product);
