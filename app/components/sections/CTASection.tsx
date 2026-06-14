'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      gsap.from(buttonsRef.current?.children || [], {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-section px-section-x overflow-hidden bg-brand-primary">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary-light to-accent-gold opacity-30" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 ref={headingRef} className="font-display text-h1 text-white mb-6">
          Ready to Source Premium Agricultural Commodities?
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Whether you&apos;re a supplier looking for buyers or an exporter seeking quality produce, we&apos;re here to bridge the gap.
        </p>
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact/?type=supplier" className="bg-white text-brand-primary px-10 py-5 rounded-full font-medium text-lg hover:-translate-y-1 hover:shadow-heavy transition-all duration-300">
            I&apos;m a Supplier
          </Link>
          <Link href="/contact/?type=exporter" className="border-2 border-white text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-white hover:text-brand-primary transition-all duration-300">
            I&apos;m an Exporter
          </Link>
        </div>
      </div>
    </section>
  );
}
