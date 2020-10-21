import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';
import { loadProducts } from '../../redux/actions';

import styles from './menu.module.css';
import {
  productsIdsListSelector,
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';
import Loader from '../loader';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  componentDidMount() {
    const { restaurantId, loadProducts } = this.props;

    loadProducts(restaurantId);
  }

  componentDidUpdate(prevProps) {
    const { restaurantId, loadProducts } = this.props;

    if (prevProps.restaurantId !== restaurantId) {
      loadProducts(restaurantId);
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu, loading, loaded } = this.props;

    if (loading || !loaded) return <Loader />;

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    return (
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
  (state, ownProps) => ({
    menu: productsIdsListSelector(state),
    loading: productsLoadingSelector(state, ownProps),
    loaded: productsLoadedSelector(state, ownProps),
  }),
  { loadProducts }
)(Menu);
