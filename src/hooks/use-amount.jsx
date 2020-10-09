import { useState } from 'react';

export default function useAmount(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count < 10 ? count + 1 : count);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return { count, increment, decrement };
}
