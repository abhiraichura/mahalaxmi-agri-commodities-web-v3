'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stats } from '@/app/data/commodities';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function CounterCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance
      gsap.from(cardRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          once: true,
        },
      });

      // Number count up
      if (numberRef.current && stat.number > 0) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.number,
          duration: 2,
          ease: 'power2.out',
          snap: { val: 1 },
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            once: true,
          },
          onUpdate: () => {
            if (numberRef.current) {
              numberRef.current.textContent = Math.round(obj.val).toLocaleString();
            }
          },
          onComplete: () => {
            gsap.to(numberRef.current, {
              scale: 1.05,
              duration: 0.15,
              yoyo: true,
              repeat: 1,
              ease: 'power2.inOut',
            });
          },
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, [index, stat.number]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl p-8 text-center shadow-soft hover:shadow-medium transition-shadow duration-300"
    >
      <div
        ref={numberRef}
        className="font-display text-5xl md:text-6xl font-bold text-brand-primary mb-2"
      >
        {stat.number === 0 ? '0' : '0'}
      </div>
      <div className="text-sm font-medium text-text-secondary uppercase tracking-wider">
        {stat.label}
      </div>
      {stat.number === 0 && (
        <div className="mt-3">
          <svg className="w-8 h-8 mx-auto text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>
      )}
    </div>
  );
}

export function StatsSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-cream-deep py-section px-section-x">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={headingRef}
          className="font-display text-h2 text-center text-text-primary mb-16"
        >
          By The Numbers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <CounterCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
