/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/debajit13/**',
      },
    ],
  },
};

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});

module.exports = nextConfig;
