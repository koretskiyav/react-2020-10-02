import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  return (
    <div>
      Menu:
      <Menu menu={props.menu}></Menu>
      Reviews:
      <Reviews reviews={props.reviews}></Reviews>
      Avg.Rate:
      <Rate rate={props.rate}></Rate>
    </div>
  );
}
