
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '**',
      },
      { // Added images.icon-icons.com
        protocol: 'https',
        hostname: 'images.icon-icons.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
