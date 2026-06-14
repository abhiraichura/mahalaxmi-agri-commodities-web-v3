import Image from 'next/image';
import Link from 'next/link';
import { commodities } from '@/app/data/commodities';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return commodities.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const commodity = commodities.find((c) => c.id === params.slug);
  if (!commodity) return {};

  return {
    title: `${commodity.name} — Premium ${commodity.category} from India | Mahalaxmi Agri Commodities`,
    description: commodity.description,
  };
}

export default function CommodityPage({ params }: { params: { slug: string } }) {
  const commodity = commodities.find((c) => c.id === params.slug);
  if (!commodity) return notFound();

  return (
    <div className="pt-32 pb-section bg-cream">
      <div className="max-w-7xl mx-auto px-section-x">
        <nav className="text-sm text-text-muted mb-8">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/commodities/" className="hover:text-brand-primary">Commodities</Link>
          <span className="mx-2">/</span>
          <span className="text-text-primary">{commodity.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={commodity.image}
              alt={`${commodity.name} - ${commodity.localName}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <span className="text-brand-primary text-sm font-semibold uppercase tracking-wider">
              {commodity.category}
            </span>
            <h1 className="font-display text-h1 text-text-primary mb-2">
              {commodity.name}
            </h1>
            <p className="text-text-muted text-lg mb-2">{commodity.localName}</p>
            <p className="text-text-secondary leading-relaxed mb-8">
              {commodity.description}
            </p>

            <div className="bg-white rounded-xl p-6 shadow-soft mb-8">
              <h3 className="font-primary font-semibold text-text-primary mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {commodity.specs.map((spec) => (
                  <div key={spec.label} className="border-b border-border-light pb-2">
                    <div className="text-text-muted text-xs uppercase">{spec.label}</div>
                    <div className="text-text-primary font-medium">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-primary font-semibold text-text-primary mb-3">Origin</h3>
              <div className="flex flex-wrap gap-2">
                {commodity.origin.map((o) => (
                  <span key={o} className="px-4 py-2 bg-cream-deep rounded-full text-sm text-text-secondary">
                    {o}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-primary font-semibold text-text-primary mb-3">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {commodity.uses.map((use) => (
                  <span key={use} className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm">
                    {use}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-primary font-semibold text-text-primary mb-2">Season</h3>
              <p className="text-text-secondary">{commodity.seasonality}</p>
            </div>

            <Link
              href="/contact/"
              className="inline-block bg-brand-primary text-white px-10 py-4 rounded-full font-medium hover:bg-brand-primary-dark transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
