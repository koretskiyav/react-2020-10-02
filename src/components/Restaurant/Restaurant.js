import React from 'react';
import Menu from '../menu';
import Reviews from '../Reviews/Reviews';

import cls from './Restaurant.module.scss';

export default function Restaurant(props) {
  return (
    <div className={cls.Restaurant}>
      <div
        className={cls.card + ' bg-white shadow overflow-hidden sm:rounded-lg'}
      >
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Menu</h3>
          <Menu menu={props.menu} />
        </div>
      </div>

      {props.reviews && (
        <div
          className={
            cls.card + ' mt-20 bg-white shadow overflow-hidden sm:rounded-lg'
          }
        >
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-8">
              Reviews
            </h3>
            <Reviews reviews={props.reviews} />
          </div>
        </div>
      )}
    </div>
  );
}
