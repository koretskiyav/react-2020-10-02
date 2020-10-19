import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';

const Restaurant = (props) => {
  const { reviews, restaurant } = props;
  // console.log('Restaurant пропса: reviews ', reviews);
  const { name, menu } = restaurant;
  const averageRating = useMemo(() => {
    const total = restaurant.reviews.reduce((acc, item) => {
      return acc + reviews[item].rating;
    }, 0);
    return Math.round(total / restaurant.reviews.length);
  }, [restaurant.reviews]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    { title: 'Reviews', content: <Reviews reviews={restaurant.reviews} restaurantId={restaurant.id} /> },
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

// Restaurant.propTypes = {
//   restaurant: PropTypes.shape({
//     name: PropTypes.string,
//     menu: PropTypes.array,
//     reviews: PropTypes.arrayOf(
//       PropTypes.shape({
//         rating: PropTypes.number.isRequired,
//       }).isRequired
//     ).isRequired,
//   }).isRequired,
// };

// export default Restaurant;

const mapStateToProps = (state, ownProps) => ({
  restaurant: ownProps.restaurant,
  reviews: state.reviews,
});

export default connect(mapStateToProps, null)(Restaurant);
