import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { connect } from 'react-redux';
import {
  averageRatingSelector,
  restaurantsLoadedSelector,
} from '../../redux/selectors';
import { NavLink } from 'react-router-dom';
import styles from './restaurant.module.css';
import { loadRestaurants } from '../../redux/actions';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Restaurant = ({
  id,
  name,
  menu,
  reviews,
  averageRating,
  restaurantsLoaded,
}) => {
  let { path, url } = useRouteMatch();
  useEffect(() => {
    if (!restaurantsLoaded) {
      loadRestaurants();
    }
  }, [restaurantsLoaded]);

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <div className={styles.tabs}>
        <NavLink
          key={'menu' + id}
          to={`${url}`}
          exact={true}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Menu
        </NavLink>
        <NavLink
          key={'reviews' + id}
          to={`${url}/reviews`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Reviews
        </NavLink>
      </div>
      <Switch>
        <Route exact path={path}>
          <Menu menu={menu} restaurantId={id} />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews reviews={reviews} restaurantId={id} />
        </Route>
      </Switch>
    </div>
  );
};

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  averageRating: PropTypes.number,
};

export default connect(
  createStructuredSelector({
    averageRating: averageRatingSelector,
    restaurantsLoaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(Restaurant);
