import React, { PureComponent, useMemo } from 'react';
import Rate from './rate';

class Review extends PureComponent {
  render() {
    return (
      <div>
        <Rate rating={this.props.review.rating} />
        <span>{this.props.review.user}</span>
        <div>{this.props.review.text}</div>
      </div>
    );
  }
}

export default function Reviews(props) {
  const rating = useMemo(
    () =>
      props.reviews.length
        ? Math.round(
            props.reviews.reduce((acc, el) => (acc += el.rating), 0) /
              props.reviews.length
          )
        : 0,
    [props.reviews]
  );

  return (
    <div style={{ flex: '1 1' }}>
      <div>Total rating</div>
      <Rate rating={rating} />
      <div>Reviews</div>
      {props.reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
