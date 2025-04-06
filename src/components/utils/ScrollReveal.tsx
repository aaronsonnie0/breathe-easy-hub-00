
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: boolean;
  threshold?: number;
  rootMargin?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  staggerChildren = false,
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px', // Reveal a bit before element enters viewport
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const combinedClassNames = `scroll-reveal ${isRevealed ? 'revealed' : ''} ${staggerChildren ? 'stagger-children' : ''} ${className}`;

  return (
    <div ref={ref} className={combinedClassNames}>
      {children}
    </div>
  );
};

export default ScrollReveal;
