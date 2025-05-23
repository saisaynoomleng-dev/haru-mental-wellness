'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Opener = () => {
  const opener = useRef<HTMLDivElement>(null);
  const top = useRef<HTMLDivElement>(null);
  const bottom = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: 'power4.inOut' },
      });

      tl.to(top.current, { yPercent: -100 })
        .to(
          bottom.current,
          {
            yPercent: 100,
          },
          '<',
        )
        .to(opener.current, { display: 'none', duration: 0, ease: 'linear' });
    },
    { scope: opener },
  );

  return (
    <div ref={opener} className="absolute inset-0 min-w-full min-h-screen">
      <div
        ref={top}
        className="absolute top-0 left-0 z-100 h-1/2 w-full bg-brand-light-green"
      />
      <div
        ref={bottom}
        className="absolute bottom-0 left-0 z-100 h-1/2 w-full bg-brand-light-green"
      />
    </div>
  );
};

export default Opener;
