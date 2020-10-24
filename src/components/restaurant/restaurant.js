import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  NavLink,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { connect } from 'react-redux';
import {
  averageRatingSelector,
  restaurantsTabSelector,
} from '../../redux/selectors';
import { setTab } from '../../redux/actions';

import styles from '../restaurants/restaurants.module.css';

const Restaurant = ({
  id,
  name,
  menu,
  reviews,
  averageRating,
  tab,
  setTab,
}) => {
  const tabs = ['menu', 'reviews'];
  const { url } = useRouteMatch();

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>

      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <NavLink
            key={tab}
            to={`${url}/${tab}`}
            className={styles.tab}
            activeClassName={styles.active}
            onClick={() => setTab(tab)}
          >
            {tab.slice(0, 1).toUpperCase() + tab.slice(1)}
          </NavLink>
        ))}
      </div>

      <Switch>
        <Route exact path={`${url}/menu`}>
          <Menu menu={menu} restaurantId={id} />
        </Route>

        <Route exact path={`${url}/reviews`}>
          <Reviews reviews={reviews} restaurantId={id} />
        </Route>

        <Route path={url}>
          <Redirect to={`${url}/${tab}`} />
        </Route>
      </Switch>
    </div>
  );
};

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  tab: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  averageRating: PropTypes.number,
  setTab: PropTypes.func.isRequired,
};

export default connect(
  createStructuredSelector({
    averageRating: averageRatingSelector,
    tab: restaurantsTabSelector,
  }),
  { setTab }
)(Restaurant);
