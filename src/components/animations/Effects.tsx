'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const FadeInEffect = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const vars: gsap.TweenVars = {
      opacity: 0,
      x: '-100%',
      duration: 1,
      delay: 1.2,
      ease: 'bounce(1)',
    };

    gsap.from(containerRef.current, vars);
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
