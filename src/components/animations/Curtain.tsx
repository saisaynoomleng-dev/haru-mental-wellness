'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import clsx from 'clsx';

gsap.registerPlugin(useGSAP);

const Curtain = ({ className }: { className?: string }) => {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(topRef.current, {
        y: '-100%',
        ease: 'power1.inOut',
        duration: 1,
      })
        .to(
          bottomRef.current,
          {
            y: '100%',
            ease: 'power1.inOut',
            duration: 1,
          },
          '<',
        )
        .set(containerRef.current, { display: 'none' });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={clsx(' min-h-screen min-w-full', className)}
    >
      <div
        ref={topRef}
        className="h-1/2 bg-brand-light-green w-full absolute z-50 top-0 left-0"
      />
      <div
        ref={bottomRef}
        className="h-1/2 bg-brand-light-green w-full absolute z-50 bottom-0 left-0"
      />
    </div>
  );
};

export default Curtain;
