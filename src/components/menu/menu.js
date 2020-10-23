import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import Basket from '../basket';
import { connect } from 'react-redux';
import {
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';
import Loader from '../loader';
import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidUpdate() {
    const { loaded, loading, loadProducts, restaurantId } = this.props;
    if (!loaded && !loading) loadProducts(restaurantId);
  }

  componentDidMount() {
    const { loaded, loading, loadProducts, restaurantId } = this.props;
    if (!loaded && !loading) loadProducts(restaurantId);
  }

  render() {
    const { menu } = this.props;
    const { loaded, loading } = this.props;
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {loaded ? menu.map((id) => <Product key={id} id={id} />) : <Loader />}
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
    loaded: productsLoadedSelector(state, props),
    loading: productsLoadingSelector(state, props),
  }),
  { loadProducts }
)(Menu);
