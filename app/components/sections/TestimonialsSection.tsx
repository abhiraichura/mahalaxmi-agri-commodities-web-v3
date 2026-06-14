'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonials } from '@/app/data/commodities';
import { Star } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const positions = [
  { left: '5%', top: '5%', rotate: -2 },
  { left: '55%', top: '0%', rotate: 1 },
  { left: '0%', top: '40%', rotate: 1.5 },
  { left: '50%', top: '35%', rotate: -1 },
  { left: '10%', top: '75%', rotate: -0.5 },
  { left: '55%', top: '70%', rotate: 2 },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
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

      // Cards bloom animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.testimonial-card');
        gsap.from(cards, {
          scale: 0.8,
          opacity: 0,
          rotate: (i) => positions[i]?.rotate + 5 || 0,
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
    <section ref={sectionRef} className="bg-cream py-section px-section-x overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={headingRef}
          className="font-display text-h2 text-center text-text-primary mb-16"
        >
          What Our Partners Say
        </h2>

        <div
          ref={cardsRef}
          className="relative min-h-[800px] md:min-h-[700px]"
        >
          {testimonials.map((testimonial, index) => {
            const pos = positions[index] || positions[0];
            return (
              <div
                key={testimonial.id}
                className="testimonial-card absolute w-full md:w-[45%] lg:w-[40%]"
                style={{
                  left: pos.left,
                  top: pos.top,
                  transform: `rotate(${pos.rotate}deg)`,
                }}
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-medium 
                                hover:-translate-y-2 transition-all duration-300 group">
                  {/* Quote Mark */}
                  <div className="absolute top-4 left-6 font-display text-[100px] leading-none text-brand-primary/10 
                                  group-hover:text-brand-primary/20 transition-colors select-none">
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-accent-gold fill-accent-gold" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-accent text-lg md:text-xl text-text-primary italic leading-relaxed mb-6 relative z-10">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-border-light pt-4">
                    <div className="font-primary font-semibold text-text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-text-muted">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
