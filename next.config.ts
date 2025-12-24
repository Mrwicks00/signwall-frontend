import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@stacks/connect', '@stacks/connect-react', '@stacks/auth', '@stacks/common', '@stacks/network'],
  turbopack: {},
};

export default nextConfig;
