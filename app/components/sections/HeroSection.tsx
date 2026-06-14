'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Array<{
      x: number; y: number; size: number; speedX: number; speedY: number;
      opacity: number; color: string; phase: number;
    }> = [];

    const colors = ['rgba(222,42,114,0.08)', 'rgba(212,168,67,0.06)', 'rgba(255,153,51,0.05)', 'rgba(255,251,247,0.1)'];
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 20 : 60;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        phase: Math.random() * Math.PI * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
    };
    if (!isMobile) window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;

      particles.forEach((p) => {
        p.x += p.speedX + mouseX * 0.01;
        p.y += p.speedY + mouseY * 0.01;
        p.y += Math.sin(time + p.phase) * 0.2;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = headlineRef.current?.querySelectorAll('.word');
      if (words) {
        gsap.from(words, {
          y: 40,
          opacity: 0,
          rotateX: 10,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.3,
        });
      }

      gsap.from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        delay: 1.2,
      });

      gsap.from(ctaRef.current?.children || [], {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 1.5,
      });

      // Parallax exit
      if (sectionRef.current) {
        gsap.to(sectionRef.current.querySelector('.hero-content'), {
          y: -100,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '80% top',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark via-dark-warm to-dark"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark/50 to-dark/80" />

      <div className="hero-content relative z-10 max-w-5xl mx-auto px-section-x text-center">
        <h1
          ref={headlineRef}
          className="font-display text-hero text-white leading-tight mb-6 perspective-1000"
        >
          <span className="word inline-block">Connecting</span>{' '}
          <span className="word inline-block">India&apos;s</span>{' '}
          <span className="word inline-block">Finest</span>{' '}
          <span className="word inline-block text-brand-primary">Agriculture</span>
        </h1>

        <p
          ref={subtitleRef}
          className="font-primary text-body text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Since 2002, Mahalaxmi Agri Commodities has been the trusted bridge between
          India&apos;s premier agricultural suppliers and discerning exporters.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/commodities/"
            className="btn-primary text-base"
          >
            Explore Our Commodities
          </Link>
          <Link
            href="/contact/"
            className="btn-secondary border-white/30 text-white hover:bg-white hover:text-dark"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-wider uppercase">Scroll to explore</span>
        <ChevronDown className="text-white/40 animate-bounce-slow" size={24} />
      </div>
    </section>
  );
}
