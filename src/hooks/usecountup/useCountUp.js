// src/hooks/useCountUp.js
import { useState, useEffect, useRef } from "react";
import { useSpring } from "@react-spring/web";

export const useCountUp = (end, duration = 2000) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  const { number } = useSpring({
    from: { number: 0 },
    number: isInView ? end : 0,
    delay: 200,
    config: { duration: duration },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { number, ref };
};
