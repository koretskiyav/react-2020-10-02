import React from 'react';
import Rate from './rate';

export default function Reviews({ rev }) {
    return (
        <div style={{ display: 'flex' }}>
            <p>{rev.user}&nbsp;|&nbsp;</p>
            <p>{rev.text}&nbsp;|&nbsp;</p>
            <p>Оценка посетителя:&nbsp;</p>
            <Rate rate={rev.rating} />
        </div>
    );
}



    // static propTypes = {
    //   menu: PropTypes.arrayOf(
    //     PropTypes.shape({
    //       id: PropTypes.string.isRequired,
    //     }).isRequired
    //   ).isRequired,
    // };


  // Menu.propTypes = {
  //   menu: PropTypes.arrayOf(PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //   }).isRequired).isRequired,
  // }