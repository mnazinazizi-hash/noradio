import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.radio47.fm",
      },
      {
        protocol: "https",
        hostname: "radio47.fm",
      },
      {
        protocol: "https",
        hostname: "www.radiojambo.co.ke",
      },
      {
        protocol: "https",
        hostname: "radiojambo.co.ke",
      },
      {
        protocol: "https",
        hostname: "www.milelefm.co.ke",
      },
      {
        protocol: "https",
        hostname: "milelefm.co.ke",
      },
      {
        protocol: "https",
        hostname: "royalmedia.co.ke",
      },
      {
        protocol: "https",
        hostname: "mediamaxnetwork.co.ke",
      },
      {
        protocol: "https",
        hostname: "www.standardmedia.co.ke",
      },
      {
        protocol: "https",
        hostname: "static.ntvkenya.co.ke",
      },
    ],
  },
};

export default nextConfig;