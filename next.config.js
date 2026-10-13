/** @type {import('next').NextConfig} */
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
  async redirects() {
    return [
      { source: '/blogs', destination: '/writing', permanent: true },
      { source: '/talks', destination: '/speaking', permanent: true },
      { source: '/experiences', destination: '/#experience', permanent: true },
      { source: '/projects', destination: '/#projects', permanent: true },
    ];
  },
};

module.exports = nextConfig;
