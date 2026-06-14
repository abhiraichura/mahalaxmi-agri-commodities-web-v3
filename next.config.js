/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['gsap', 'lenis'],
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
