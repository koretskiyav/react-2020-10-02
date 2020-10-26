import React, { useEffect } from 'react';
import Restaurants from '../components/restaurants';
import Menu from '../components/menu';
import Loader from '../components/loader';
import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../redux/selectors';
import { loadRestaurants } from '../redux/actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function MenuPage({ loadRestaurants, loading, loaded, match }) {
  const {
    params: { id },
    ...props
  } = match;
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, []); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  return (
    <div>
      <Restaurants match={match} />
      <Menu restaurantId={id} />
    </div>
  );
}

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(MenuPage);
