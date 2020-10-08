export default function useAverageRate(reviews) {
  const averageRating = reviews.length
    ? (
        reviews.reduce((rate, review) => +review.rating + rate, 0) /
        reviews.length
      ).toFixed(1)
    : 0;
  return { averageRating };
}
