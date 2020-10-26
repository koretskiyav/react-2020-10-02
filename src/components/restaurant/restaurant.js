import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Link } from 'react-router-dom';
import cn from 'classnames';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { averageRatingSelector } from '../../redux/selectors';

import styles from './restaurant.module.css';

const Restaurant = ({ id, name, menu, reviews, averageRating, match }) => {
  const { section } = match.params;

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <div className={styles.tabs}>
        <Link
          className={cn(styles.tab, { [styles.active]: section === 'menu' })}
          to={`/restaurants/${id}/menu`}
        >
          Menu
        </Link>
        <Link
          className={cn(styles.tab, { [styles.active]: section === 'reviews' })}
          to={`/restaurants/${id}/reviews`}
        >
          Reviews
        </Link>
      </div>
      <Switch>
        <Route
          path={`/restaurants/${id}/menu`}
          render={() => <Menu menu={menu} restaurantId={id} />}
        />
        <Route
          path={`/restaurants/${id}/reviews`}
          render={() => <Reviews reviews={reviews} restaurantId={id} />}
        />
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
  })
)(Restaurant);
