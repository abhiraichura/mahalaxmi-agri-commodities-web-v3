'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link2, Clock, ShieldAlert, Truck } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const painPoints = [
  {
    icon: Link2,
    title: 'Suppliers struggle to find reliable buyers at fair prices',
    description: 'Farmers and suppliers across Gujarat, Rajasthan, and Madhya Pradesh face challenges connecting with legitimate exporters who offer competitive rates and consistent demand.',
  },
  {
    icon: Clock,
    title: 'Exporters waste months vetting unverified suppliers',
    description: 'International and domestic exporters spend excessive time and resources verifying supplier credentials, quality standards, and delivery capabilities.',
  },
  {
    icon: ShieldAlert,
    title: 'Quality disputes destroy trust and profits',
    description: 'Inconsistent quality parameters, moisture content variations, and purity discrepancies lead to rejected shipments and damaged business relationships.',
  },
  {
    icon: Truck,
    title: 'Logistics coordination becomes a nightmare',
    description: 'Coordinating transportation, storage, and timely delivery across multiple states requires expertise that most traders lack, leading to delays and losses.',
  },
];

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        const lines = headingRef.current.querySelectorAll('.line');
        gsap.from(lines, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      }

      // Cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.pain-card');
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          rotateX: 15,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark py-section px-section-x">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={headingRef}
          className="font-display text-h2 text-white text-center max-w-4xl mx-auto mb-16 perspective-1000"
        >
          <span className="line block">The Agricultural Supply Chain</span>
          <span className="line block">is <span className="text-brand-primary">Broken</span></span>
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="pain-card bg-dark-card border border-dark-border rounded-2xl p-8 md:p-10 
                           hover:-translate-y-1 hover:border-brand-primary/30 transition-all duration-300
                           group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6
                                group-hover:bg-brand-primary/20 transition-colors">
                  <Icon size={24} className="text-brand-primary" />
                </div>
                <h3 className="font-primary text-xl font-semibold text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
