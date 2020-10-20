import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';

const Restaurant = ({ restaurant }) => {
  //console.log('GGGGGGG restaurant: ', restaurant);
  //const { name, menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = restaurant.reviews.reduce(
      (acc, { rating }) => acc + rating,
      0
    );
    return Math.round(total / restaurant.reviews.length);
  }, [restaurant.reviews]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={restaurant.menu} /> },
    { title: 'Reviews', content: <Reviews reviews={restaurant.reviews} /> },
  ];

  return (
    <div>
      <Banner heading={restaurant.name}>
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
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  // amount: state.order[ownProps.id] || 0,
  restaurant: state.restaurants[ownProps.id],
});

const mapDispatchToProps = {
  // decrement,
  // increment,
};

//export default Restaurant;
export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
