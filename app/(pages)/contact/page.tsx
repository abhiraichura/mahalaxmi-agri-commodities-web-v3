'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Copy, Check } from 'lucide-react';

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [formType, setFormType] = useState<'supplier' | 'exporter'>('supplier');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="pt-32 pb-section bg-cream">
      <div className="max-w-7xl mx-auto px-section-x">
        <div className="text-center mb-16">
          <h1 className="font-display text-h1 text-text-primary mb-4">
            Let&apos;s Bridge Your Next Deal
          </h1>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Whether you&apos;re a supplier with quality produce or an exporter seeking reliable sources, 
            we&apos;re here to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h2 className="font-primary font-semibold text-text-primary text-lg mb-6">Contact Information</h2>

              <div className="space-y-4">
                <a href="tel:+919033000032" className="flex items-center gap-4 text-text-secondary hover:text-brand-primary transition-colors">
                  <Phone size={20} className="text-brand-primary" />
                  <span>90330 00032</span>
                </a>
                <a href="tel:+919825500032" className="flex items-center gap-4 text-text-secondary hover:text-brand-primary transition-colors">
                  <Phone size={20} className="text-brand-primary" />
                  <span>98255 00032</span>
                </a>
                <a href="mailto:mahalaxmiagricommodities@gmail.com" className="flex items-center gap-4 text-text-secondary hover:text-brand-primary transition-colors">
                  <Mail size={20} className="text-brand-primary" />
                  <span>mahalaxmiagricommodities@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h2 className="font-primary font-semibold text-text-primary text-lg mb-6">Addresses</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-brand-primary mt-1 shrink-0" />
                  <div className="flex-1">
                    <p className="text-text-secondary text-sm">Main Office: 408-Star Plaza, Phulchhab Chowk, Rajkot (Gujarat) 360 001</p>
                    <button
                      onClick={() => copyToClipboard('408-Star Plaza, Phulchhab Chowk, Rajkot (Gujarat) 360 001', 'main')}
                      className="text-brand-primary text-xs mt-1 flex items-center gap-1"
                    >
                      {copied === 'main' ? <Check size={12} /> : <Copy size={12} />}
                      {copied === 'main' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-brand-primary mt-1 shrink-0" />
                  <div className="flex-1">
                    <p className="text-text-secondary text-sm">Marketing Yard: Tower A-118 New Marketing Yard, Rajkot Morbi Highway, Bedi, Rajkot (Gujarat) 360 003</p>
                    <button
                      onClick={() => copyToClipboard('Tower A-118 New Marketing Yard, Rajkot Morbi Highway, Bedi, Rajkot (Gujarat) 360 003', 'yard')}
                      className="text-brand-primary text-xs mt-1 flex items-center gap-1"
                    >
                      {copied === 'yard' ? <Check size={12} /> : <Copy size={12} />}
                      {copied === 'yard' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setFormType('supplier')}
                className={`flex-1 py-3 rounded-full font-medium text-sm transition-all ${
                  formType === 'supplier'
                    ? 'bg-brand-primary text-white'
                    : 'bg-cream-deep text-text-secondary'
                }`}
              >
                I&apos;m a Supplier
              </button>
              <button
                onClick={() => setFormType('exporter')}
                className={`flex-1 py-3 rounded-full font-medium text-sm transition-all ${
                  formType === 'exporter'
                    ? 'bg-brand-primary text-white'
                    : 'bg-cream-deep text-text-secondary'
                }`}
              >
                I&apos;m an Exporter
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Commodity</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder={formType === 'supplier' ? 'What do you supply?' : 'What do you need?'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Quantity (MT)</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder="Estimated quantity"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Contact Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder="Phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder="City, State"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-primary text-white py-4 rounded-full font-medium hover:bg-brand-primary-dark transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
