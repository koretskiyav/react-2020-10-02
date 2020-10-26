import React, { useEffect } from 'react';
import Restaurants from '../components/restaurants';
import Reviews from '../components/reviews';
import Loader from '../components/loader';
import {
  restaurantsListSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../redux/selectors';
import { loadRestaurants } from '../redux/actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function RewiewsPage({ loadRestaurants, loading, loaded, match }) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, []); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  return (
    <div>
      <Restaurants match={match} />
      <Reviews restaurantId={match.params.id} />
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
)(RewiewsPage);
