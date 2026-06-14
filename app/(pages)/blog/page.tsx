import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/app/data/commodities';

export const metadata = {
  title: 'Market Insights & Agricultural Intelligence | Mahalaxmi Blog',
  description: 'Expert analysis on agri commodity prices, export trends, and sourcing strategies from India.',
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-section bg-cream">
      <div className="max-w-7xl mx-auto px-section-x">
        <div className="text-center mb-16">
          <h1 className="font-display text-h1 text-text-primary mb-4">
            Market Insights & Agricultural Intelligence
          </h1>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Expert analysis, price trends, and sourcing strategies from India&apos;s agri commodity markets.
          </p>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-medium mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-[16/9] lg:aspect-auto">
              <Image
                src="/images/4_Colorful_Spice_Bazaar_in_Marrakech.png"
                alt="Spice market insights"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-brand-primary text-sm font-semibold uppercase tracking-wider mb-3">
                {blogPosts[0].category}
              </span>
              <h2 className="font-display text-h3 text-text-primary mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-text-secondary mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-text-muted">
                <span>{blogPosts[0].date}</span>
                <span>•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow"
            >
              <div className="h-48 bg-cream-deep" />
              <div className="p-6">
                <span className="text-brand-primary text-xs font-semibold uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="font-primary font-semibold text-text-primary mt-2 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-text-secondary text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
