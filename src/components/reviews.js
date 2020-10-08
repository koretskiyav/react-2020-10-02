import React, { Fragment, useState, useMemo, useCallback } from 'react';
import Rating from './rating';

export const Reviews = (props) => {
  const { reviews } = props;
  const [isActive, setIsActive] = useState(false);
  const onToggle = useCallback(() => setIsActive((v) => !v), [setIsActive]);

  const content = useMemo(
    () =>
      reviews.map(({ id, rating, user, text }) => (
        <Fragment key={id}>
          <p>
            <b>{user}: </b>
            <Rating rating={rating} />
          </p>

          <p>{text}</p>
        </Fragment>
      )),
    [reviews]
  );

  return (
    <div>
      <p>
        <b>
          {isActive ? '\u25B2' : '\u25BC'}{' '}
          <a href="#" onClick={onToggle}>
            Reviews
          </a>
        </b>
      </p>

      {isActive ? content : null}
    </div>
  );
};

export default Reviews;
