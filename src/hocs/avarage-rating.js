import React from 'react';
import useAvarageRating from '../hooks/use-avarage-rating';

export default (AvarafeRating) => (props) => {
  const avarageRating = useAvarageRating(props.restaurant.reviews);
  return <AvarafeRating {...props} avarageRating={avarageRating} />;
};
