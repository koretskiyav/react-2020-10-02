import { useMemo } from 'react';
export default function useAvarageRating(reviews = {}) {
  const avarageRating = useMemo(
    () =>
      reviews.map((review) => review.rating).reduce((sum, a) => sum + a, 0) /
      reviews.length,
    [reviews]
  );
  return avarageRating;
}
