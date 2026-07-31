import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname,
  },
  allowedDevOrigins: ["192.168.68.6"],
};

export default nextConfig;
module.exports = nextConfig;
