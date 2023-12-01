/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  fallback: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
