import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';
import { connect } from 'react-redux';
import {
  productsListSelector,
  productsLoadedSelector,
  productsLoadingSelector,
  productLoadedId,
} from '../../redux/selectors';
import { loadMenu } from '../../redux/actions';
import Loader from '../loader';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    const { loadMenu, loading, restaurantId, loadedId } = this.props;
    if (!loading && !loadedId[restaurantId]) loadMenu(restaurantId);
  }

  componentDidUpdate() {
    const { loadMenu, loading, restaurantId, loadedId } = this.props;
    if (!loading && !loadedId[restaurantId]) loadMenu(restaurantId);
  }

  render() {
    const { loaded, loading, menu } = this.props;

    //if (!loading && !loaded) loadMenu(restaurantId);

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
  (state) => ({
    products: productsListSelector(state),
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state),
    loadedId: productLoadedId(state),
  }),
  { loadMenu }
)(Menu);
