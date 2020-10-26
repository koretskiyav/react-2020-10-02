import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';
import { Link, Route } from 'react-router-dom';

const Restaurant = ({ id, name, menu, reviews, averageRating, match }) => {
  const tabs = [
    {
      title: 'Menu',
      link: `/restaurants/${id}/menu`,
    },
    {
      title: 'Reviews',
      link: `/restaurants/${id}/reviews`,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <Tabs tabs={tabs} />
      <Route
        exact
        path="/restaurants/:restId/menu"
        render={() => <Menu menu={menu} restaurantId={id} />}
      />
      <Route
        exact
        path="/restaurants/:restId/reviews"
        render={() => <Reviews reviews={reviews} restaurantId={id} />}
      />
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
