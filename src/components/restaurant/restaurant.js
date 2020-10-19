import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import {
  restaurantAverageRatingSelector,
  restaurantReviewsSelector,
} from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating }) => {
  const { name, menu, reviews, id } = restaurant;

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    {
      title: 'Reviews',
      content: <Reviews reviewIds={reviews} restaurantId={id} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  reviews: restaurantReviewsSelector(state, ownProps),
  averageRating: restaurantAverageRatingSelector(state, ownProps),
});

export default connect(mapStateToProps)(Restaurant);
