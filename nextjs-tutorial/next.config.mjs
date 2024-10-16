/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.course-api.com',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
