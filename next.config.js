/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['a.storyblok.com'],
  },
};

module.exports = nextConfig;
