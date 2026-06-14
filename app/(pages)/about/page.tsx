import Image from 'next/image';

export const metadata = {
  title: 'About Us | Mahalaxmi Agri Commodities — Rajkot, Gujarat',
  description: "From a single desk in 2002 to one of Gujarat's most respected agri commodity brokerages. Learn about our journey, values, and commitment.",
};

const milestones = [
  { year: '2002', title: 'The Beginning', description: 'Kishan Raichura establishes Mahalaxmi with a single desk at Rajkot New Marketing Yard.' },
  { year: '2008', title: 'Network Expansion', description: 'Expanded supplier network to Rajasthan and Madhya Pradesh, adding spices and oil seeds.' },
  { year: '2012', title: 'Exporter Partnerships', description: 'First major export partnerships established with Mumbai and Delhi-based trading houses.' },
  { year: '2015', title: 'Cotton Division', description: 'Added cotton lint and bales to the commodity portfolio, serving textile manufacturers.' },
  { year: '2018', title: 'Digital Transformation', description: 'Implemented digital tracking and quality management systems for all transactions.' },
  { year: '2020', title: 'Pandemic Resilience', description: 'Ensured uninterrupted supply chains during COVID-19, earning trust of 200+ partners.' },
  { year: '2024', title: '23 Years Strong', description: 'Serving 500+ suppliers and 200+ exporters with 10,000+ MT monthly volume.' },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-section bg-cream">
      <div className="max-w-7xl mx-auto px-section-x">
        <div className="text-center mb-20">
          <h1 className="font-display text-h1 text-text-primary mb-6">
            From a Single Desk in Rajkot to<br />
            <span className="text-brand-primary">India&apos;s Trusted Agri Bridge</span>
          </h1>
          <p className="text-body text-text-secondary max-w-3xl mx-auto">
            Twenty-three years of connecting India&apos;s agricultural heartland with markets that demand excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/9_Marketing_Director_Visits_Adoni_Yemmiganur.png"
              alt="Agricultural market yard in India"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-h2 text-text-primary mb-6">Our Story</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              In 2002, Kishan Raichura set up a small desk at Rajkot&apos;s New Marketing Yard with a simple belief: 
              that farmers and exporters deserved a broker who understood both sides of the trade.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Twenty-three years later, that desk has grown into one of Gujarat&apos;s most respected agri commodity 
              brokerages — but the belief remains unchanged.
            </p>
            <p className="text-text-secondary leading-relaxed">
              We don&apos;t just know commodities. We know the people who grow them. We know the markets that demand them. 
              And we know how to bridge the gap between the two.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-display text-h2 text-text-primary text-center mb-16">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-primary/30 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-soft inline-block">
                      <span className="text-brand-primary font-display text-2xl font-bold">{milestone.year}</span>
                      <h3 className="font-primary font-semibold text-text-primary mt-2">{milestone.title}</h3>
                      <p className="text-text-secondary text-sm mt-1">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-brand-primary border-4 border-cream z-10 shrink-0" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: 'Integrity', desc: 'Every transaction is built on transparency and honest dealing. No compromises, no shortcuts.' },
            { title: 'Reliability', desc: 'When we commit, we deliver. Rain or shine, pandemic or prosperity — our word is our bond.' },
            { title: 'Excellence', desc: 'We settle for nothing less than the best. Quality is not an act, it is our habit.' },
          ].map((pillar) => (
            <div key={pillar.title} className="bg-white rounded-2xl p-8 shadow-soft text-center">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-primary text-2xl font-display font-bold">
                  {pillar.title[0]}
                </span>
              </div>
              <h3 className="font-primary font-semibold text-text-primary text-lg mb-3">{pillar.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <h2 className="font-display text-h2 text-text-primary text-center mb-8">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-primary font-semibold text-text-primary mb-2">Main Office</h3>
              <p className="text-text-secondary">408-Star Plaza, Phulchhab Chowk, Rajkot (Gujarat) 360 001</p>
            </div>
            <div>
              <h3 className="font-primary font-semibold text-text-primary mb-2">Marketing Yard Office</h3>
              <p className="text-text-secondary">Tower A-118 New Marketing Yard, Rajkot Morbi Highway, Bedi, Rajkot (Gujarat) 360 003</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
