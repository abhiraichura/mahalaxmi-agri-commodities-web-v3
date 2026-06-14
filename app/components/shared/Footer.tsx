'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';
import { useState } from 'react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/commodities/', label: 'Commodities' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
  { href: '/blog/', label: 'Blog' },
  { href: '/faq/', label: 'FAQ' },
];

const commodityLinks = [
  { href: '/commodities/', label: 'Spices' },
  { href: '/commodities/', label: 'Oil Seeds' },
  { href: '/commodities/', label: 'Pulses' },
  { href: '/commodities/', label: 'Cotton' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white relative">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-section-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-primary-dark flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-lg">MAHALAXMI</span>
                <span className="block text-[10px] text-white/60 tracking-widest uppercase">Agri Commodities</span>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-6">General Merchant & Commission Agent</p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://wa.me/919033000032" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="mailto:mahalaxmiagricommodities@gmail.com"
                 className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Navigate</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors relative group">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Commodities */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Our Commodities</h4>
            <ul className="space-y-3">
              {commodityLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors relative group">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919033000032" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors">
                  <Phone size={16} className="text-brand-primary" />
                  90330 00032
                </a>
              </li>
              <li>
                <a href="tel:+919825500032" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors">
                  <Phone size={16} className="text-brand-primary" />
                  98255 00032
                </a>
              </li>
              <li>
                <a href="mailto:mahalaxmiagricommodities@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors">
                  <Mail size={16} className="text-brand-primary" />
                  <span className="break-all">mahalaxmiagricommodities@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={16} className="text-brand-primary mt-0.5 shrink-0" />
                <span>Tower A-118 New Marketing Yard, Rajkot Morbi Highway, Bedi, Rajkot (Gujarat) 360 003</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">Market Updates</h4>
            <p className="text-white/60 text-sm mb-4">Get weekly price trends and market insights.</p>
            {subscribed ? (
              <p className="text-green-400 text-sm">Thank you! Check your inbox.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-primary transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white rounded-lg px-4 py-3 text-sm font-medium hover:bg-brand-primary-dark transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-section-x py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © 2024 Mahalaxmi Agri Commodities. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap/" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 w-12 h-12 bg-brand-primary text-white rounded-full shadow-brand 
                   flex items-center justify-center hover:bg-brand-primary-dark transition-all duration-300 hover:-translate-y-1 z-30"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
