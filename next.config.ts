import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  ...(process.env.BUILD_STANDALONE === "true"
    ? {
        output: "standalone" as const,
        outputFileTracingIncludes: {
          "/**": ["./src/data/prices.json"],
        },
      }
    : {}),
};

export default nextConfig;
