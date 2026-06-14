'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Ken Burns + parallax
      if (imageRef.current) {
        const img = imageRef.current.querySelector('img');
        if (img) {
          gsap.to(img, {
            scale: 1.05,
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: 'none',
          });
        }

        gsap.from(imageRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
        });
      }

      // Content animations
      if (contentRef.current) {
        const eyebrow = contentRef.current.querySelector('.eyebrow');
        const heading = contentRef.current.querySelector('.heading');
        const body = contentRef.current.querySelector('.body');
        const cta = contentRef.current.querySelector('.cta');

        gsap.from(eyebrow, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            once: true,
          },
        });

        if (heading) {
          const words = heading.querySelectorAll('.word');
          gsap.from(words, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: 'power3.out',
            delay: 0.2,
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              once: true,
            },
          });
        }

        gsap.from(body, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.5,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            once: true,
          },
        });

        gsap.from(cta, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
          delay: 0.8,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream py-section px-section-x">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image Column */}
        <div ref={imageRef} className="relative aspect-[4/5] rounded-3xl overflow-hidden">
          <Image
            src="/images/9_Marketing_Director_Visits_Adoni_Yemmiganur.png"
            alt="Rajkot New Marketing Yard - Agricultural commodity trading hub"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
        </div>

        {/* Content Column */}
        <div ref={contentRef} className="lg:pl-8">
          <span className="eyebrow inline-block text-brand-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Our Story
          </span>

          <h2 className="heading font-display text-h2 text-text-primary mb-6">
            <span className="word inline-block">Two</span>{' '}
            <span className="word inline-block">Decades</span>{' '}
            <span className="word inline-block">of</span>{' '}
            <span className="word inline-block">Building</span>{' '}
            <span className="word inline-block text-brand-primary">Relationships</span>
          </h2>

          <p className="body text-body text-text-secondary leading-relaxed mb-8">
            In 2002, Kishan Raichura set up a small desk at Rajkot&apos;s New Marketing Yard with a simple belief: 
            that farmers and exporters deserved a broker who understood both sides of the trade. Twenty-three 
            years later, that desk has grown into one of Gujarat&apos;s most respected agri commodity brokerages — 
            but the belief remains unchanged.
          </p>

          <p className="body text-body text-text-secondary leading-relaxed mb-8">
            We don&apos;t just know commodities. We know the people who grow them. We know the markets that 
            demand them. And we know how to bridge the gap between the two.
          </p>

          <Link
            href="/about/"
            className="cta inline-flex items-center gap-2 border-2 border-brand-primary text-brand-primary 
                       px-8 py-4 rounded-full font-medium hover:bg-brand-primary hover:text-white transition-all duration-300"
          >
            Read Our Full Story
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
