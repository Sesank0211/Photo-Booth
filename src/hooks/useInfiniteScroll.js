import { useEffect, useRef } from 'react';

export default function useInfiniteScroll(onIntersect, enabled) {
  const sentinelRef = useRef(null);
  const callbackRef = useRef(onIntersect);

  useEffect(() => { callbackRef.current = onIntersect; }, [onIntersect]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !enabled || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) callbackRef.current();
    }, { rootMargin: '500px 0px', threshold: 0 });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [enabled]);

  return sentinelRef;
}
