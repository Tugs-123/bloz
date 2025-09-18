import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
   images: {
    domains: ['cdn.sanity.io'], // ашиглах гадаад домэйныг нэмнэ
  },
};

export default nextConfig;
