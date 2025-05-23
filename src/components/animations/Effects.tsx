'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import GSDevTools from 'gsap/GSDevTools';
import { useRef } from 'react';
import {
  CurtainEffectProps,
  SlideInEffectProps,
  TypeWriterEffectProps,
} from '@/lib/types';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin, SplitText, GSDevTools);

export const CurtainEffect = ({
  direction,
  duration = 1,
  delay = 1,
  children,
  className,
  offset = 100,
}: CurtainEffectProps) => {
  const container = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const vars: gsap.TweenVars = {
        opacity: 0,
        duration,
        delay,
        scale: 1.2,
        ease: 'back.inOut',
      };

      if (direction == 'top') vars.yPercent = offset;
      if (direction == 'bottom') vars.yPercent = -offset;

      if (container.current?.children) {
        gsap.from(Array.from(container.current.children), vars);
      }
    },
    { scope: container },
  );

  return (
    <span style={{ display: 'contents' }} ref={container} className={className}>
      {children}
    </span>
  );
};

export const TypeWriter = ({
  className,
  text,
  delay = 0,
  duration = 1,
}: TypeWriterEffectProps) => {
  const container = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        { text: '' },
        {
          text: text,
          delay,
          duration,
          ease: 'power4.in',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <span ref={container} className={className}>
      {text}
    </span>
  );
};

export const LineTextHeight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const container = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const split = SplitText.create(container.current, {
        type: 'lines',
      });

      gsap.fromTo(
        split.lines,
        {
          opacity: 0,
          yPercent: -100,
        },
        {
          yPercent: 0,
          opacity: 1,
          stagger: {
            amount: 1,
          },
          scrollTrigger: {
            trigger: split.lines,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <p ref={container} className={className}>
      {children}
    </p>
  );
};

export const WaterFillIn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        {
          clipPath: 'inset(100% 0% 0% 0%)',
          ease: 'power4.inOut',
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: container.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          opacity: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.5,
        },
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export const SlideIn = ({
  children,
  className,
  direction,
  duration = 1,
  delay = 0,
  offset = 100,
}: SlideInEffectProps) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const vars: gsap.TweenVars = {
        opacity: 0,
        duration,
        delay,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      };

      if (direction == 'top') vars.y = -offset;
      if (direction == 'left') vars.x = -offset;
      if (direction == 'right') vars.x = offset;
      if (direction == 'bottom') vars.y = offset;

      gsap.from(container.current, vars);
    },
    { scope: container },
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export const SlideInGroup = ({
  children,
  duration = 1,
  direction,
  offset = 100,
  delay = 0,
  className,
}: SlideInEffectProps) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const vars: gsap.TweenVars = {
        opacity: 0,
        duration,
        delay,
        ease: 'power4.in',
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      };

      if (direction == 'top') vars.y = -offset;
      if (direction == 'left') vars.x = -offset;
      if (direction == 'right') vars.x = offset;
      if (direction == 'bottom') vars.y = offset;

      if (container.current?.children) {
        gsap.from(Array.from(container.current.children), vars);
      }
    },
    { scope: container },
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export const FadeIn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(container.current, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: container },
  );
  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export const ScrubberEffect = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        {
          clipPath: 'inset(100% 0% 0% 0%)',
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          scrollTrigger: {
            trigger: container.current,
            start: 'top 60%',
            end: '+=100',
            toggleActions: 'play none none none',
            scrub: 1,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export const RandomTextEffect = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const split = SplitText.create(container.current!.children, {
        type: 'chars',
      });

      gsap.from(split.chars, {
        opacity: 0,
        y: 200,
        delay: 1,
        stagger: {
          amount: 1,
          from: 'random',
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};
