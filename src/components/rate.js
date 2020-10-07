import React, { PureComponent } from 'react';

const MAX_STARS = 5;
export default class Rate extends PureComponent {
  render() {
    const RateStar = Array(MAX_STARS)
      .fill('✩')
      .map((el, i) => {
        return <span key={i}>{i < this.props.rating ? '★' : el}</span>;
      });
    return (
      <span>
        <span>{this.props.rating}</span>
        {RateStar}
      </span>
    );
  }
}
