export interface Commodity {
  id: string;
  name: string;
  localName: string;
  category: 'spices' | 'oil-seeds' | 'pulses' | 'cotton';
  image: string;
  origin: string[];
  specs: {
    label: string;
    value: string;
  }[];
  description: string;
  uses: string[];
  seasonality: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface StatItem {
  number: number;
  suffix: string;
  label: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export const commodities: Commodity[] = [
  {
    id: 'cumin',
    name: 'Cumin Seeds',
    localName: 'Jeera',
    category: 'spices',
    image: '/images/3_Cumin_Seed_Close_Up_Natural_Flavorful.png',
    origin: ['Gujarat', 'Rajasthan'],
    specs: [
      { label: 'Moisture', value: '8% max' },
      { label: 'Purity', value: '99% min' },
      { label: 'Admixture', value: '1% max' },
      { label: 'Color', value: 'Brown' },
    ],
    description: 'Premium cumin seeds sourced from the finest farms in Gujarat and Rajasthan. Known for their distinctive warm, earthy flavor and aromatic properties, our cumin seeds meet the highest export standards.',
    uses: ['Culinary', 'Spice blends', 'Medicinal', 'Export'],
    seasonality: 'Feb - Apr',
  },
  {
    id: 'coriander',
    name: 'Coriander Seeds',
    localName: 'Dhaniya',
    category: 'spices',
    image: '/images/1_Buy_Dhaniya_Coriander_Seeds_Online.png',
    origin: ['Gujarat', 'Rajasthan', 'Madhya Pradesh'],
    specs: [
      { label: 'Moisture', value: '9% max' },
      { label: 'Purity', value: '98% min' },
      { label: 'Split Seeds', value: '5% max' },
      { label: 'Color', value: 'Golden Brown' },
    ],
    description: 'High-quality coriander seeds with a sweet, citrusy aroma. Sourced from the best growing regions in India, perfect for culinary and export applications.',
    uses: ['Culinary', 'Pickling', 'Spice blends', 'Export'],
    seasonality: 'Mar - May',
  },
  {
    id: 'fennel',
    name: 'Fennel Seeds',
    localName: 'Saunf',
    category: 'spices',
    image: '/images/10_Try_Tasty_Organic_Saunf_Fennel_Seeds.png',
    origin: ['Gujarat', 'Rajasthan'],
    specs: [
      { label: 'Moisture', value: '10% max' },
      { label: 'Purity', value: '99% min' },
      { label: 'Color', value: 'Greenish' },
      { label: 'Flavor', value: 'Sweet, Anise-like' },
    ],
    description: 'Sweet and aromatic fennel seeds, carefully selected for their premium quality. Ideal for culinary use, mouth fresheners, and medicinal applications.',
    uses: ['Culinary', 'Mouth freshener', 'Medicinal', 'Export'],
    seasonality: 'Apr - Jun',
  },
  {
    id: 'fenugreek',
    name: 'Fenugreek Seeds',
    localName: 'Methi',
    category: 'spices',
    image: '/images/9_Organic_fenugreek_seeds_methi_seeds.png',
    origin: ['Gujarat', 'Rajasthan', 'Madhya Pradesh'],
    specs: [
      { label: 'Moisture', value: '8% max' },
      { label: 'Purity', value: '98% min' },
      { label: 'Color', value: 'Yellowish Brown' },
      { label: 'Flavor', value: 'Bitter, Maple-like' },
    ],
    description: 'Premium fenugreek seeds with a distinctive bitter-sweet flavor. Widely used in Indian cuisine, Ayurvedic medicine, and as a nutritional supplement.',
    uses: ['Culinary', 'Medicinal', 'Nutritional', 'Export'],
    seasonality: 'Oct - Dec',
  },
  {
    id: 'nigella',
    name: 'Nigella Seeds',
    localName: 'Kalonji',
    category: 'spices',
    image: '/images/1_9_Impressive_Health_Benefits_of_Kalonji.png',
    origin: ['Gujarat', 'Rajasthan'],
    specs: [
      { label: 'Moisture', value: '8% max' },
      { label: 'Purity', value: '99% min' },
      { label: 'Color', value: 'Black' },
      { label: 'Flavor', value: 'Peppery, Onion-like' },
    ],
    description: 'Black nigella seeds, also known as black cumin, with a peppery, onion-like flavor. Highly valued for their medicinal properties and culinary versatility.',
    uses: ['Culinary', 'Medicinal', 'Pickling', 'Export'],
    seasonality: 'Nov - Jan',
  },
  {
    id: 'black-sesame',
    name: 'Black Sesame',
    localName: 'Til (Kala)',
    category: 'oil-seeds',
    image: '/images/5_Black_Sesame_Seeds_Japanese_Ingredients.png',
    origin: ['Gujarat', 'Madhya Pradesh'],
    specs: [
      { label: 'Moisture', value: '6% max' },
      { label: 'Purity', value: '98% min' },
      { label: 'Oil Content', value: '48% min' },
      { label: 'Color', value: 'Jet Black' },
    ],
    description: 'Premium black sesame seeds with high oil content. Rich in antioxidants and essential nutrients, perfect for culinary, oil extraction, and export markets.',
    uses: ['Oil extraction', 'Culinary', 'Medicinal', 'Export'],
    seasonality: 'Oct - Dec',
  },
  {
    id: 'white-sesame',
    name: 'White Sesame',
    localName: 'Til (Safed)',
    category: 'oil-seeds',
    image: '/images/6_Organic_White_Sesame_Seed_at_165.png',
    origin: ['Gujarat', 'Madhya Pradesh', 'Rajasthan'],
    specs: [
      { label: 'Moisture', value: '6% max' },
      { label: 'Purity', value: '99% min' },
      { label: 'Oil Content', value: '50% min' },
      { label: 'Color', value: 'Cream White' },
    ],
    description: 'High-quality white sesame seeds with excellent oil yield. Widely used in confectionery, bakery, oil extraction, and as a garnish in various cuisines.',
    uses: ['Oil extraction', 'Confectionery', 'Culinary', 'Export'],
    seasonality: 'Oct - Dec',
  },
  {
    id: 'cotton-seed',
    name: 'Cotton Seed',
    localName: 'Kapas Beej',
    category: 'oil-seeds',
    image: '/images/2_Cottonseed_oil_A_possible_nutritional.png',
    origin: ['Gujarat', 'Maharashtra', 'Madhya Pradesh'],
    specs: [
      { label: 'Moisture', value: '8% max' },
      { label: 'Oil Content', value: '18% min' },
      { label: 'Protein', value: '22% min' },
      { label: 'Fiber', value: '20% min' },
    ],
    description: 'Quality cotton seeds for oil extraction and cattle feed. Sourced from major cotton-producing regions of India with consistent quality standards.',
    uses: ['Oil extraction', 'Cattle feed', 'Export'],
    seasonality: 'Oct - Feb',
  },
  {
    id: 'mung',
    name: 'Mung (Green Gram)',
    localName: 'Moong',
    category: 'pulses',
    image: '/images/2_Sabut_moong_dal_Green_Mung_beans.png',
    origin: ['Gujarat', 'Maharashtra', 'Rajasthan'],
    specs: [
      { label: 'Moisture', value: '10% max' },
      { label: 'Purity', value: '99% min' },
      { label: 'Color', value: 'Bright Green' },
      { label: 'Size', value: '3-4mm' },
    ],
    description: 'Premium green mung beans with bright color and uniform size. Highly nutritious and versatile, perfect for sprouting, dal, and export markets.',
    uses: ['Sprouting', 'Dal', 'Flour', 'Export'],
    seasonality: 'Mar - May',
  },
  {
    id: 'chickpeas',
    name: 'Chickpeas',
    localName: 'Chana',
    category: 'pulses',
    image: '/images/7_Brown_Indian_Kala_Chana_Chickpeas.png',
    origin: ['Madhya Pradesh', 'Rajasthan', 'Maharashtra'],
    specs: [
      { label: 'Moisture', value: '12% max' },
      { label: 'Purity', value: '99% min' },
      { label: 'Size', value: '8-10mm' },
      { label: 'Color', value: 'Brown/Cream' },
    ],
    description: 'High-quality chickpeas in various grades. Essential for Indian cuisine, hummus production, and international export markets.',
    uses: ['Culinary', 'Hummus', 'Flour', 'Export'],
    seasonality: 'Feb - Apr',
  },
  {
    id: 'cotton',
    name: 'Cotton (Lint/Bales)',
    localName: 'Kapas',
    category: 'cotton',
    image: '/images/5_Cotton_Bales_Field_Stock_Photo_704685250.png',
    origin: ['Gujarat', 'Maharashtra', 'Telangana'],
    specs: [
      { label: 'Staple Length', value: '28-30mm' },
      { label: 'Micronaire', value: '3.5-4.5' },
      { label: 'Strength', value: '28-30 g/tex' },
      { label: 'Color', value: 'White/Off-white' },
    ],
    description: "Premium cotton lint and bales from India's best cotton-growing regions. Meeting international quality standards for textile manufacturing and export.",
    uses: ['Textile manufacturing', 'Export', 'Yarn production'],
    seasonality: 'Oct - Mar',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Mahalaxmi found us a cumin supplier in Unjha that no other broker could locate. The quality consistency over 3 years has been exceptional. Kishan bhai doesn't just broker — he guarantees.",
    author: "Rajesh Patel",
    role: "Director",
    company: "Patel Agri Exports, Ahmedabad",
    rating: 5,
  },
  {
    id: 2,
    quote: "We've been working with Kishan Raichura for 8 years. His network in Rajkot's New Marketing Yard is unmatched. When we need chickpeas in monsoon season, he delivers.",
    author: "Vikram Shah",
    role: "Proprietor",
    company: "Shah Exports, Mumbai",
    rating: 5,
  },
  {
    id: 3,
    quote: "As a supplier from Rajasthan, I struggled to find reliable buyers. Mahalaxmi changed that. Payments are on time, logistics are handled, and I focus on what I do best — farming.",
    author: "Mahesh Kumar",
    role: "Supplier",
    company: "Jodhpur",
    rating: 5,
  },
  {
    id: 4,
    quote: "The sesame seeds we source through Mahalaxmi consistently test at 48%+ oil content. That's premium grade. Our European buyers have never complained.",
    author: "Priya Sharma",
    role: "Procurement Head",
    company: "Global Spice Traders, Delhi",
    rating: 5,
  },
  {
    id: 5,
    quote: "In 2020, when the pandemic disrupted everything, Mahalaxmi ensured our cotton supply never stopped. That's not brokerage. That's partnership.",
    author: "Arun Mehta",
    role: "CEO",
    company: "Mehta Textiles, Surat",
    rating: 5,
  },
  {
    id: 6,
    quote: "We export 200MT of pulses monthly. Mahalaxmi handles sourcing, quality check, and logistics. One point of contact for everything. Incredible efficiency.",
    author: "Sanjay Gupta",
    role: "Operations Director",
    company: "Gupta Agri International, Chennai",
    rating: 5,
  },
];

export const regions = [
  "Gujarat", "Rajasthan", "Madhya Pradesh", "Unjha", "Rajkot", 
  "Ahmedabad", "Mumbai", "Delhi", "Chennai", "Kolkata", 
  "Jodhpur", "Indore", "Surat", "Nagpur", "Hyderabad"
];

export const stats: StatItem[] = [
  { number: 23, suffix: "+", label: "Years of Excellence" },
  { number: 500, suffix: "+", label: "Verified Suppliers" },
  { number: 200, suffix: "+", label: "Active Exporters" },
  { number: 10000, suffix: "+", label: "MT Monthly Volume" },
  { number: 50000, suffix: "+", label: "Successful Transactions" },
  { number: 0, suffix: "", label: "Compromises on Quality" },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Cumin Price Trends 2024: What Exporters Need to Know",
    category: "Market Updates",
    excerpt: "An in-depth analysis of cumin price movements and market dynamics affecting export decisions.",
    date: "2024-12-15",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Understanding Sesame Seed Grades: Black vs White Sesame",
    category: "Commodity Guides",
    excerpt: "A comprehensive guide to sesame seed grading, quality parameters, and export specifications.",
    date: "2024-12-10",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "The Complete Guide to Sourcing Chickpeas from Gujarat",
    category: "Commodity Guides",
    excerpt: "Everything you need to know about sourcing premium chickpeas from India's largest producing state.",
    date: "2024-12-05",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "How to Verify Agri Commodity Suppliers in India: A Buyer's Checklist",
    category: "Industry News",
    excerpt: "Essential verification steps every exporter should take before committing to a supplier.",
    date: "2024-11-28",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Rajkot Marketing Yard: The Heart of Gujarat's Spice Trade",
    category: "Industry News",
    excerpt: "An insider's look at one of India's most important agricultural commodity trading hubs.",
    date: "2024-11-20",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Export Documentation for Agricultural Commodities from India",
    category: "Export Insights",
    excerpt: "A step-by-step guide to navigating the documentation requirements for agri commodity exports.",
    date: "2024-11-15",
    readTime: "9 min read",
  },
];
