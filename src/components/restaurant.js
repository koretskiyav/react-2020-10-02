import React, { Component } from 'react';
import { MenuItems } from '../enums/menu-items';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default class Restaurant extends Component {
  state = { menuItem: null };

  componentWillUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      this.setState({ menuItem: null });
    }
  }

  changeMenuItem = (item) => {
    this.setState({ menuItem: item });
  };

  getRate = () => {
    return (
      this.props.restaurant.reviews
        .map((rev) => rev.rating)
        .reduce((prev, cur) => prev + cur) /
      this.props.restaurant.reviews.length
    ).toFixed(2);
  };

  render() {
    const { restaurant } = this.props;
    let subInfo = '';

    switch (this.state.menuItem) {
      case MenuItems[0]:
        subInfo = <Menu menu={restaurant.menu} />;
        break;
      case MenuItems[1]:
        subInfo = <Reviews reviews={restaurant.reviews} />;
        break;
      default:
        break;
    }

    return (
      <div>
        <h1>{restaurant.name}</h1>
        <Rate rating={this.getRate()} />
        {MenuItems.map((menuItem, index) => (
          <button key={index} onClick={() => this.changeMenuItem(menuItem)}>
            {menuItem}
          </button>
        ))}
        {subInfo}
      </div>
    );
  }
}
