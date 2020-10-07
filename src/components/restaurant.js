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
    var sumAndCount = this.props.restaurant.reviews
      .map((rev) => rev.rating)
      .reduce(
        function (prev, cur) {
          return {
            sum: prev.sum + cur,
            count: prev.count + 1,
          };
        },
        { sum: 0, count: 0 }
      );

    return (sumAndCount.sum / sumAndCount.count).toFixed(2);
  };

  render() {
    let subInfo = '';

    switch (this.state.menuItem) {
      case MenuItems[0]:
        subInfo = <Menu menu={this.props.restaurant.menu} />;
        break;
      case MenuItems[1]:
        subInfo = <Reviews reviews={this.props.restaurant.reviews} />;
        break;
      default:
        break;
    }

    return (
      <div>
        <h1>{this.props.restaurant.name}</h1>
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
