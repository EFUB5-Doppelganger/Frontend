import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'efub-awa.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**', // 또는 '/accommodations/**' 처럼 더 좁게
      },
    ],
  },
  compiler: {
    styledComponents: true, 
  },
};

export default nextConfig;