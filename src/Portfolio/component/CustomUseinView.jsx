import { useState, useEffect, useRef } from 'react';

export const useInView = (options) => {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasBeenInView) {
        setHasBeenInView(true);
      }
    }, options);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, hasBeenInView]);

  return [ref, hasBeenInView];
};
