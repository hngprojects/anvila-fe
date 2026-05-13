import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: false, //temporarily to test the new auth flow without interruption, will be removed in the future when the new flow is fully implemented
  },
};

export default nextConfig;
