import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './product.module.css';
import MinusIcon from './icons/minus.svg';
import PlusIcon from './icons/plus.svg';
import SvgSprite from './svgSprite';

import counter from '../../hocs/counter';

const Product = ({ product, amount, increment, decrement, fetchData }) => {
  useEffect(() => {
    fetchData && fetchData(product.id);
  }, []); // eslint-disable-line

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
              <button className={styles.button} onClick={decrement}>
                <svg>
                  <use xlinkHref="#minus" />
                </svg>
              </button>
              <button
                className={styles.button}
                onClick={increment}
                data-id="product-increment"
              >
                <svg>
                  <use xlinkHref="#plus" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <SvgSprite />
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    ingredients: PropTypes.array.isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  amount: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
};

export default counter(Product);
