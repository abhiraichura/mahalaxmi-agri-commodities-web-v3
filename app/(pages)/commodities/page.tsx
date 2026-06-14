import Image from 'next/image';
import Link from 'next/link';
import { commodities } from '@/app/data/commodities';

export const metadata = {
  title: 'Premium Agricultural Commodities | Mahalaxmi Agri Commodities',
  description: "Explore our portfolio of premium spices, oil seeds, pulses, and cotton. Sourced from India's finest growing regions.",
};

export default function CommoditiesPage() {
  return (
    <div className="pt-32 pb-section bg-cream">
      <div className="max-w-7xl mx-auto px-section-x mb-16">
        <h1 className="font-display text-h1 text-text-primary mb-4">
          Premium Agricultural Commodities from India&apos;s Heartland
        </h1>
        <p className="text-body text-text-secondary max-w-3xl">
          From the spice markets of Unjha to the cotton fields of Gujarat, we source and broker 
          the finest agricultural commodities for domestic and international markets.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-section-x">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commodities.map((commodity) => (
            <Link
              key={commodity.id}
              href={`/commodities/${commodity.id}/`}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-heavy transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={commodity.image}
                  alt={`${commodity.name} - ${commodity.localName}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="font-primary text-xl font-bold text-text-primary mb-1">
                  {commodity.name}
                </h2>
                <p className="text-text-muted text-sm mb-3">{commodity.localName}</p>
                <p className="text-text-secondary text-sm line-clamp-2 mb-4">
                  {commodity.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {commodity.origin.map((o) => (
                    <span key={o} className="px-2 py-1 bg-cream-deep text-xs rounded-md text-text-secondary">
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
