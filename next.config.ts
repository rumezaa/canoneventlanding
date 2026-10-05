import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Pin the workspace root — there is a stray package-lock.json in a parent
  // directory that Turbopack would otherwise try to use.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
