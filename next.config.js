/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Next 14: keep under experimental so /resume PDFs ship with the serverless route on Vercel.
  experimental: {
    outputFileTracingIncludes: {
      '/resume': ['./resume/**/*'],
      '/resume/file': ['./resume/**/*'],
    },
  },
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js'],
    };
    return config;
  },
};

module.exports = nextConfig;

