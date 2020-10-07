import React, { useMemo, useState } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant({ reviews, menu }) {
  const avarageRate = useMemo(() => {
    const rateAmount = reviews.length;
    if (rateAmount) {
      const rateSum = reviews.reduce((prev, cur) => prev + cur.rating, 0);
      return Math.ceil((rateSum / rateAmount) * 10) / 10;
    }

    return 0;
  }, [reviews]);

  return (
    <div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <p>
        Avarege rate: <Rate rating={avarageRate} />
      </p>
    </div>
  );
}
