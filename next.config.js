const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  async redirects() {
    return [
      { source: '/about', destination: '/#about', permanent: false },
      { source: '/projects', destination: '/#projects', permanent: false },
    ];
  },
};

module.exports = nextConfig;