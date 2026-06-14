'use client';

import { useState } from 'react';
import { commodities } from '@/app/data/commodities';

const mockPrices: Record<string, { current: number; change: number; trend: number[] }> = {
  cumin: { current: 185, change: 2.5, trend: [175, 178, 180, 182, 185, 183, 185] },
  coriander: { current: 72, change: -1.2, trend: [75, 74, 73, 72, 71, 72, 72] },
  sesame: { current: 142, change: 0.8, trend: [138, 139, 140, 141, 142, 141, 142] },
  chickpeas: { current: 58, change: -0.5, trend: [60, 59, 59, 58, 58, 57, 58] },
  cotton: { current: 625, change: 1.8, trend: [610, 615, 620, 618, 622, 625, 625] },
};

export default function MarketPulsePage() {
  const [selectedCommodity, setSelectedCommodity] = useState('cumin');

  return (
    <div className="pt-32 pb-section bg-cream">
      <div className="max-w-7xl mx-auto px-section-x">
        <div className="text-center mb-16">
          <h1 className="font-display text-h1 text-text-primary mb-4">
            Market <span className="text-brand-primary">Pulse</span>
          </h1>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Real-time price tracking and market intelligence for India&apos;s key agricultural commodities.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-soft mb-12">
          <h2 className="font-primary font-semibold text-text-primary mb-6">Daily Price Ticker (₹/kg)</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(mockPrices).map(([key, data]) => {
              const commodity = commodities.find((c) => c.id === key);
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCommodity(key)}
                  className={`p-4 rounded-xl text-left transition-all ${
                    selectedCommodity === key
                      ? 'bg-brand-primary text-white shadow-brand'
                      : 'bg-cream-deep hover:bg-cream-deep/80'
                  }`}
                >
                  <div className="text-sm opacity-80">{commodity?.localName}</div>
                  <div className="font-display text-2xl font-bold">₹{data.current}</div>
                  <div className={`text-xs ${data.change >= 0 ? 'text-green-400' : 'text-red-300'}`}>
                    {data.change >= 0 ? '+' : ''}{data.change}%
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-soft mb-12">
          <h2 className="font-primary font-semibold text-text-primary mb-6">7-Day Price Trend</h2>
          <div className="h-64 flex items-end gap-2">
            {mockPrices[selectedCommodity]?.trend.map((price, i) => {
              const max = Math.max(...mockPrices[selectedCommodity].trend);
              const min = Math.min(...mockPrices[selectedCommodity].trend);
              const height = ((price - min) / (max - min)) * 100;
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-brand-primary/20 rounded-t-lg relative"
                    style={{ height: `${Math.max(height, 10)}%` }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-text-muted">
                      ₹{price}
                    </div>
                  </div>
                  <div className="text-xs text-text-muted">Day {i + 1}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <h2 className="font-primary font-semibold text-text-primary mb-4">Market Commentary</h2>
          <p className="text-text-secondary leading-relaxed">
            Cumin prices have shown steady upward momentum over the past week, driven by increased export demand 
            from Middle Eastern markets. Suppliers in Unjha and Rajkot report strong inventory levels. 
            Quality Grade A cumin is commanding a premium of ₹8-10/kg over standard grades.
          </p>
          <div className="mt-6 flex items-center gap-4 text-sm text-text-muted">
            <span>Last updated: Today, 10:30 AM</span>
            <span>•</span>
            <span>Source: Rajkot APMC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
