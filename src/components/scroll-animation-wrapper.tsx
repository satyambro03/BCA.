'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type ScrollAnimationWrapperProps = {
  children: React.ReactNode;
  className?: string;
  animationClass?: string; // e.g., 'fade-in-up'
  threshold?: number;
  triggerOnce?: boolean;
};

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  className,
  animationClass = 'fade-in-up', // Default animation
  threshold = 0.1, // Trigger when 10% visible
  triggerOnce = true, // Only trigger animation once
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optionally unobserve after triggering once
            if (triggerOnce && domRef.current) {
              observer.unobserve(domRef.current);
            }
          } else if (!triggerOnce) {
            // Optionally reset animation if it should trigger every time
            // setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce, animationClass]);

  return (
    <div
      ref={domRef}
      className={cn(
        'transition-opacity duration-1000 ease-out', // Base transition for opacity
        isVisible ? `opacity-100 ${animationClass}` : 'opacity-0', // Apply animation class when visible
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
