export default function useRange({ rate, startRange = 1, endRange = 5 }) {
  if (Array.isArray(rate)) {
    let counter = 0;

    rate.map((review) => (counter = counter + review.rating));

    rate = +(counter / rate.length).toFixed(1);
  }

  const includedRange = () => rate >= startRange && rate <= endRange;

  return { includedRange, rate };
}
