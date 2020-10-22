import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';
import { connect } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import styles from './menu.module.css';
import {
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';
import Loader from '../loader';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidMount() {
    if (!this.props.loading && !this.props.loaded) {
      this.props.loadProducts(this.props.restaurantId);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.props.loading && this.needReload()) {
      this.props.loadProducts(this.props.restaurantId);
    }
  }

  needReload() {
    return this.props.needLoadProducts;
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu } = this.props;

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }
    return this.props.loading || !this.props.loaded || this.needReload() ? (
      <Loader />
    ) : (
      <div className={styles.menu}>
        <div>
          {menu.map((id) => (
            <Product key={id} id={id} />
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state),
    needLoadProducts: !state.products.loadedRestaurantIds.includes(
      props.restaurantId
    ),
  }),
  { loadProducts }
)(Menu);
