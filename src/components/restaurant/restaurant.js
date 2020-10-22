import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';

const Restaurant = ({ id, name, averageRating }) => {
  const tabs = [
    { title: 'Menu', content: <Menu restaurantId={id} /> },
    {
      title: 'Reviews',
      content: <Reviews restaurantId={id} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>{/* <Rate value={averageRating} /> */}</Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  averageRating: PropTypes.number,
};

export default connect((state, props) => ({
  // averageRating: averageRatingSelector(state, props),
}))(Restaurant);
