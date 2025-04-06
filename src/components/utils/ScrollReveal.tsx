
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: boolean;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  staggerChildren = false,
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px', // Reveal a bit before element enters viewport
  delay = 0,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay if specified
          if (delay > 0) {
            setTimeout(() => setIsRevealed(true), delay);
          } else {
            setIsRevealed(true);
          }
          // Don't disconnect to enable re-animation when element comes back into view
          // observer.disconnect();
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          // Only reset animation when scrolling back up
          setIsRevealed(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, delay]);

  const combinedClassNames = `scroll-reveal ${isRevealed ? 'revealed' : ''} ${staggerChildren ? 'stagger-children' : ''} ${className}`;

  return (
    <div ref={ref} className={combinedClassNames}>
      {children}
    </div>
  );
};

export default ScrollReveal;
