'use client';

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function CounterAnimation({ value, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const end = parseInt(value.toString().replace(/\D/g, ''));
      const startTime = performance.now();
      const easing = (t) => 1 - Math.pow(1 - t, 3); // Cubic ease out

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easing(progress);
        const currentCount = Math.floor(end * easedProgress);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
