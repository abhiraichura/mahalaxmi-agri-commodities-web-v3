'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { regions } from '@/app/data/commodities';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function RegionMarquee() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const doubledRegions = [...regions, ...regions];

  return (
    <div ref={sectionRef} className="bg-cream py-12 overflow-hidden border-y border-border-light">
      <div className="animate-marquee flex items-center whitespace-nowrap hover:[animation-play-state:paused]">
        {doubledRegions.map((region, index) => (
          <span key={index} className="flex items-center mx-4">
            <span className="font-primary text-lg sm:text-xl font-semibold text-text-muted">
              {region}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mx-4 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
