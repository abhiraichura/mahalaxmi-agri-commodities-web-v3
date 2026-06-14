'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { commodities, type Commodity } from '@/app/data/commodities';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'spices', label: 'Spices' },
  { id: 'oil-seeds', label: 'Oil Seeds' },
  { id: 'pulses', label: 'Pulses' },
  { id: 'cotton', label: 'Cotton' },
];

function CommodityCard({ commodity, index }: { commodity: Commodity; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 10, y: -x * 10 });
  }, []);

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          once: true,
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-heavy transition-all duration-500
                   preserve-3d"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? 'translateZ(10px)' : ''}`,
        }}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={commodity.image}
            alt={`${commodity.name} - Premium ${commodity.category} from India`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-primary text-xl font-bold text-text-primary">{commodity.name}</h3>
              <p className="text-sm text-text-muted">{commodity.localName}</p>
            </div>
            <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded-full capitalize">
              {commodity.category}
            </span>
          </div>

          {/* Origin Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {commodity.origin.map((origin) => (
              <span key={origin} className="px-2 py-1 bg-cream-deep text-text-secondary text-xs rounded-md">
                {origin}
              </span>
            ))}
          </div>

          {/* Specs Preview */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {commodity.specs.slice(0, 2).map((spec) => (
              <div key={spec.label} className="text-xs">
                <span className="text-text-muted">{spec.label}:</span>
                <span className="text-text-primary font-medium ml-1">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={`/commodities/${commodity.id}/`}
            className="block w-full text-center py-3 border-2 border-brand-primary text-brand-primary 
                       rounded-xl font-medium text-sm hover:bg-brand-primary hover:text-white transition-all duration-300"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export function CommoditiesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const filteredCommodities = activeCategory === 'all'
    ? commodities
    : commodities.filter((c) => c.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll('.word');
        gsap.from(words, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
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
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="font-display text-h2 text-center text-text-primary max-w-3xl mx-auto mb-12"
        >
          <span className="word inline-block">Premium</span>{' '}
          <span className="word inline-block">Commodities,</span>{' '}
          <span className="word inline-block">Sourced</span>{' '}
          <span className="word inline-block">with</span>{' '}
          <span className="word inline-block text-brand-primary">Precision</span>
        </h2>

        {/* Category Tabs */}
        <div ref={tabsRef} className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-soft">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-brand-primary text-white shadow-brand'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Commodity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCommodities.map((commodity, index) => (
            <CommodityCard key={commodity.id} commodity={commodity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
