'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/commodities/', label: 'Commodities' },
  { href: '/about/', label: 'About' },
  { href: '/blog/', label: 'Blog' },
  { href: '/market-pulse/', label: 'Market Pulse' },
  { href: '/contact/', label: 'Contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}>
        <div className="bg-dark text-white py-2 px-section-x">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+919033000032" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                <Phone size={14} />
                <span>90330 00032</span>
              </a>
              <a href="tel:+919825500032" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                <Phone size={14} />
                <span>98255 00032</span>
              </a>
            </div>
            <a href="mailto:mahalaxmiagricommodities@gmail.com" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">mahalaxmiagricommodities@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'top-0 bg-white/95 backdrop-blur-md shadow-soft py-3' 
          : 'top-10 bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-section-x flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-primary-dark flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg leading-tight transition-colors ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}>
                MAHALAXMI
              </span>
              <span className={`text-[10px] tracking-widest uppercase transition-colors ${
                isScrolled ? 'text-text-muted' : 'text-white/70'
              }`}>
                Agri Commodities
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled ? 'text-text-primary hover:text-brand-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full`} />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact/"
              className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-medium 
                         hover:bg-brand-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-heavy transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-section-x py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-text-primary hover:text-brand-primary font-medium py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="block bg-brand-primary text-white text-center px-6 py-3 rounded-full font-medium mt-4"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
