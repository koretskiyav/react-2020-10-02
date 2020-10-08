import { useMemo } from 'react';

export default function useAverageRating(reviews) {
  return useMemo(
    () =>
      reviews.map(({ rating }) => rating).reduce((a, b) => a + b) /
      reviews.length,
    [reviews.length]
  );
}
