'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const message = encodeURIComponent("Hi, I'm interested in commodities from Mahalaxmi.");

  return (
    <a
      href={`https://wa.me/919033000032?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full shadow-heavy 
                 flex items-center justify-center hover:bg-green-600 transition-all duration-300 
                 hover:-translate-y-1 hover:scale-110 z-50 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
}
