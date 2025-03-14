import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = withContentlayer({
  /* config options here */
});

export default nextConfig;
