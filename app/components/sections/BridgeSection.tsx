'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const commodityColors: Record<string, string> = {
  cumin: '#8B6914',
  sesame: '#D4A843',
  chickpeas: '#C4A77D',
  cotton: '#F5F5F5',
  mung: '#2D5A3D',
  coriander: '#D4A843',
};

export function BridgeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current;
      const dots = dotsRef.current?.querySelectorAll('.bridge-dot');
      const stats = statsRef.current?.querySelectorAll('.stat-item');

      if (!path || !dots || !stats) return;

      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: 'top top',
          end: '+=200vh',
          scrub: 1,
          snap: {
            snapTo: (progress) => {
              const labels = [0, 0.35, 0.65, 0.85, 1];
              return labels.reduce((closest, label) =>
                Math.abs(label - progress) < Math.abs(closest - progress) ? label : closest
              , 0);
            },
            duration: { min: 0.2, max: 0.5 },
            delay: 0.1,
            ease: 'power1.inOut',
          },
        },
      });

      // Phase 1: The Broken Chain (0-35%)
      tl.addLabel('phase1')
        .to(path, {
          strokeDashoffset: pathLength * 0.3,
          duration: 1,
          ease: 'none',
        })
        .to(textRef.current?.querySelectorAll('.phase1-text') || [], {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
        }, '<');

      // Phase 2: The Bridge Builds (35-65%)
      tl.addLabel('phase2')
        .to(path, {
          strokeDashoffset: 0,
          stroke: '#DE2A72',
          strokeWidth: 6,
          duration: 1,
          ease: 'none',
        })
        .to(dots, {
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
        }, '<0.5')
        .to(textRef.current?.querySelectorAll('.phase2-text') || [], {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
        }, '<');

      // Phase 3: The Flow (65-85%)
      tl.addLabel('phase3')
        .to(dots, {
          x: '100%',
          duration: 2,
          ease: 'none',
          stagger: { each: 0.3, repeat: -1 },
        })
        .to(stats, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.5,
        }, '<');

      // Phase 4: The Glow (85-100%)
      tl.addLabel('phase4')
        .to(path, {
          filter: 'drop-shadow(0 0 20px rgba(222,42,114,0.5))',
          duration: 0.5,
        })
        .to(ctaRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
        }, '<');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const bridgeDots = [
    { color: commodityColors.cumin, delay: 0 },
    { color: commodityColors.sesame, delay: 0.5 },
    { color: commodityColors.chickpeas, delay: 1 },
    { color: commodityColors.cotton, delay: 1.5 },
    { color: commodityColors.mung, delay: 2 },
    { color: commodityColors.coriander, delay: 2.5 },
  ];

  const stats = [
    { number: '23+', label: 'Years of Excellence' },
    { number: '500+', label: 'Verified Suppliers' },
    { number: '200+', label: 'Active Exporters' },
    { number: '10,000+', label: 'MT Monthly' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-cream flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-cream-deep via-cream to-cream" />

      <div className="relative z-10 max-w-7xl mx-auto px-section-x w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Left Text Content */}
        <div ref={textRef} className="lg:col-span-2 space-y-8">
          <div className="phase1-text opacity-0 -translate-x-8">
            <h3 className="font-display text-h3 text-dark mb-4">Without a trusted bridge...</h3>
            <ul className="space-y-3">
              {['Suppliers are isolated', 'Exporters are guessing', 'Quality is a gamble', 'Trust is non-existent'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-xs">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="phase2-text opacity-0 -translate-x-8">
            <h3 className="font-display text-h3 text-brand-primary mb-4">Then came Mahalaxmi...</h3>
            <ul className="space-y-3">
              {['Suppliers found their market', 'Exporters found their source', 'Quality became consistent', 'Trust became the foundation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary">
                  <span className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item opacity-0 translate-y-4">
                <div className="font-display text-3xl font-bold text-brand-primary">{stat.number}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>

          <div ref={ctaRef} className="opacity-0 scale-90">
            <Link href="/contact/" className="btn-primary inline-block text-lg px-10 py-5">
              Be Part of the Flow
            </Link>
          </div>
        </div>

        {/* Right Bridge Visualization */}
        <div className="lg:col-span-3 relative h-[400px] lg:h-[500px]">
          <svg
            viewBox="0 0 600 300"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Bridge Path */}
            <path
              ref={pathRef}
              d="M 50 150 Q 150 150, 300 150 Q 450 150, 550 150"
              fill="none"
              stroke="#CCCCCC"
              strokeWidth={2}
              strokeLinecap="round"
              className="bridge-path"
            />

            {/* Start and End Points */}
            <circle cx="50" cy="150" r="8" fill="#DE2A72" opacity="0.3" />
            <circle cx="550" cy="150" r="8" fill="#DE2A72" opacity="0.3" />
          </svg>

          {/* Commodity Dots */}
          <div ref={dotsRef} className="absolute inset-0 pointer-events-none">
            {bridgeDots.map((dot, i) => (
              <div
                key={i}
                className="bridge-dot absolute w-4 h-4 rounded-full opacity-0 scale-0"
                style={{
                  backgroundColor: dot.color,
                  left: '8%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  boxShadow: `0 0 10px ${dot.color}40`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
